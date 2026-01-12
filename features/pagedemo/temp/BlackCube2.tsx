'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  RoundedBox, 
  Environment, 
  ContactShadows, 
  OrbitControls, 
  PerspectiveCamera 
} from '@react-three/drei';
import * as THREE from 'three';
import { v4 as uuidv4 } from 'uuid';

// --- TYPES ---

type MaterialType = 'glossy' | 'matte' | 'mesh';

interface CubeData {
  id: string;
  pos: THREE.Vector3;
  type: MaterialType;
}

interface AnimationState {
  isAnimating: boolean;
  axis: 'x' | 'y' | 'z' | null;
  slice: number;
  angleMoved: number;
  targetAngle: number;
  activeCubes: THREE.Mesh[];
  waitCounter: number;
  globalRotationSpeed: { x: number; y: number };
}

interface CubieProps {
  position: THREE.Vector3;
  type: MaterialType;
  meshTexture: THREE.CanvasTexture;
  innerRef: (node: THREE.Mesh | null) => void; 
}

// --- CONFIGURATION ---
const CUBE_SIZE = 1;
const SPACING = 0.02;
const TOTAL_SIZE = CUBE_SIZE + SPACING;
const ROUNDNESS = 0.08;
const ANIMATION_SPEED = 0.05;
const WAIT_TIME = 60;

// --- ASSET GENERATION ---

function createMeshTexture(): THREE.CanvasTexture {
  // SSR SAFETY: If on the server, return an empty Texture cast as CanvasTexture
  // to satisfy TypeScript without crashing.
  if (typeof document === 'undefined') {
    return new THREE.Texture() as unknown as THREE.CanvasTexture;
  }

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.fillStyle = '#111111';
    ctx.fillRect(0, 0, 512, 512);

    ctx.fillStyle = '#333333';
    const radius = 4;
    const gap = 16;
    
    for (let y = 0; y < 512; y += gap) {
      for (let x = 0; x < 512; x += gap) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// --- MATERIALS ---

const materials: Record<string, THREE.MeshStandardMaterial | null> = {
  glossy: new THREE.MeshStandardMaterial({
    color: '#050505',
    roughness: 0.1,
    metalness: 0.1,
    envMapIntensity: 1.5,
  }),
  matte: new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    roughness: 0.8,
    metalness: 0.0,
  }),
  mesh: null, 
};

// --- DATA GENERATION ---

const generateCubePositions = (): THREE.Vector3[] => {
  const positions: THREE.Vector3[] = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        positions.push(new THREE.Vector3(x * TOTAL_SIZE, y * TOTAL_SIZE, z * TOTAL_SIZE));
      }
    }
  }
  return positions;
};

const generateCubeData = (): CubeData[] => {
  const positions = generateCubePositions();
  return positions.map((pos) => {
    const rand = Math.random();
    let type: MaterialType = 'glossy';
    if (rand > 0.6) type = 'matte';
    if (rand > 0.85) type = 'mesh';
    
    return {
      id: uuidv4(),
      pos,
      type,
    };
  });
};

// --- COMPONENTS ---

const Cubie: React.FC<CubieProps> = ({ position, type, meshTexture, innerRef }) => {
  let material = materials.glossy;
  
  if (type === 'matte') {
    material = materials.matte;
  } else if (type === 'mesh') {
    if (!materials.mesh) {
      materials.mesh = new THREE.MeshStandardMaterial({
        map: meshTexture,
        color: '#111111',
        roughness: 0.4,
        metalness: 0.5,
      });
    }
    material = materials.mesh;
  }

  return (
    <RoundedBox
      ref={innerRef}
      args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]}
      radius={ROUNDNESS}
      smoothness={4}
      position={position}
      material={material!}
      castShadow
      receiveShadow
    />
  );
};

const MagicCube: React.FC = () => {
  // FIX: Simply call the safe function. No manual 'window' checks needed here anymore.
  const meshTexture = useMemo(() => createMeshTexture(), []);
  
  const [cubes] = useState<CubeData[]>(generateCubeData());
  
  const groupRef = useRef<THREE.Group>(null);
  const cubeRefs = useRef<Record<string, THREE.Mesh>>({}); 
  const pivotRef = useRef<THREE.Object3D>(new THREE.Object3D());
  
  const state = useRef<AnimationState>({
    isAnimating: false,
    axis: null,
    slice: 0,
    angleMoved: 0,
    targetAngle: Math.PI / 2,
    activeCubes: [],
    waitCounter: 0,
    globalRotationSpeed: { x: 0.002, y: 0.005 }
  });

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.add(pivotRef.current);
    }
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;

    // 1. GLOBAL TUMBLE
    groupRef.current.rotation.y += state.current.globalRotationSpeed.y;
    groupRef.current.rotation.x += state.current.globalRotationSpeed.x;

    // 2. RUBIK'S SLICE LOGIC
    const s = state.current;

    if (!s.isAnimating) {
      s.waitCounter++;
      if (s.waitCounter > WAIT_TIME) {
        startRandomMove();
      }
    } else {
      const speed = ANIMATION_SPEED;
      
      if (s.axis === 'x') pivotRef.current.rotation.x += speed;
      if (s.axis === 'y') pivotRef.current.rotation.y += speed;
      if (s.axis === 'z') pivotRef.current.rotation.z += speed;

      s.angleMoved += speed;

      if (s.angleMoved >= s.targetAngle) {
        finishMove();
      }
    }
  });

  const startRandomMove = () => {
    const s = state.current;
    
    const axes: ('x' | 'y' | 'z')[] = ['x', 'y', 'z'];
    const slices = [-1 * TOTAL_SIZE, 0, 1 * TOTAL_SIZE];
    
    s.axis = axes[Math.floor(Math.random() * axes.length)];
    const targetSlicePos = slices[Math.floor(Math.random() * slices.length)];
    
    pivotRef.current.rotation.set(0, 0, 0);
    pivotRef.current.position.set(0, 0, 0);
    pivotRef.current.updateMatrixWorld();

    s.activeCubes = [];
    const epsilon = 0.1;

    cubes.forEach(cubeData => {
      const mesh = cubeRefs.current[cubeData.id];
      if (!mesh) return;

      let val = 0;
      if (s.axis === 'x') val = mesh.position.x;
      if (s.axis === 'y') val = mesh.position.y;
      if (s.axis === 'z') val = mesh.position.z;

      if (Math.abs(val - targetSlicePos) < epsilon) {
        s.activeCubes.push(mesh);
      }
    });

    s.activeCubes.forEach(mesh => {
      pivotRef.current.attach(mesh);
    });

    s.isAnimating = true;
    s.angleMoved = 0;
    s.waitCounter = 0;
  };

  const finishMove = () => {
    if (!groupRef.current) return;
    const s = state.current;
    
    if (s.axis === 'x') pivotRef.current.rotation.x = s.targetAngle;
    if (s.axis === 'y') pivotRef.current.rotation.y = s.targetAngle;
    if (s.axis === 'z') pivotRef.current.rotation.z = s.targetAngle;
    
    pivotRef.current.updateMatrixWorld();

    s.activeCubes.forEach(mesh => {
      groupRef.current!.attach(mesh);
      
      mesh.position.x = Math.round(mesh.position.x / TOTAL_SIZE) * TOTAL_SIZE;
      mesh.position.y = Math.round(mesh.position.y / TOTAL_SIZE) * TOTAL_SIZE;
      mesh.position.z = Math.round(mesh.position.z / TOTAL_SIZE) * TOTAL_SIZE;
      
      mesh.updateMatrix();
    });

    s.isAnimating = false;
  };

  return (
    <group ref={groupRef}>
      {cubes.map((cube) => (
        <Cubie
          key={cube.id}
          innerRef={(el) => {
            if (el) cubeRefs.current[cube.id] = el;
          }}
          position={cube.pos}
          type={cube.type}
          meshTexture={meshTexture}
        />
      ))}
    </group>
  );
};

const Lighting: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={100} 
        castShadow 
      />
      <Environment preset="city" />
    </>
  );
};

export default function Page() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[5, 4, 6]} fov={45} />
        <Lighting />
        <MagicCube />
        <ContactShadows 
          position={[0, -3, 0]} 
          opacity={0.4} 
          scale={20} 
          blur={2.5} 
          far={4.5} 
        />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}