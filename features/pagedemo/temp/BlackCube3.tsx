'use client';

/**
 * ------------------------------------------------------------------
 * RUBIK'S CUBE - ABSTRACT PATTERN EDITION
 * ------------------------------------------------------------------
 * UPDATES:
 * 1. Replaced 'MeshGrillMaterial' (Metallic) with 'AbstractPatternMaterial'.
 * 2. New Shader: Generates a seamless "Fluid/Damascus" wave pattern.
 * 3. Aesthetics: "Perfect Blend" achieved by using subtle deep-black 
 * gradients instead of harsh metallic rims.
 * ------------------------------------------------------------------
 */

import React, { 
  useRef, 
  useState, 
  useEffect, 
  useMemo 
} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  RoundedBox, 
  Environment, 
  ContactShadows, 
  OrbitControls, 
  PerspectiveCamera,
  shaderMaterial
} from '@react-three/drei';
import * as THREE from 'three';

// ------------------------------------------------------------------
// SECTION 1: NEW ABSTRACT SHADER
// ------------------------------------------------------------------

// This shader creates a smooth, organic 'Damascus' or 'Fluid' look
// It blends perfectly with the black aesthetic without looking metallic.
const AbstractPatternMaterial = shaderMaterial(
  {
    uColorBase: new THREE.Color('#050505'),   // Deepest Black
    uColorWave: new THREE.Color('#161616'),   // Soft Charcoal
    uScale: 8.0,                              // Pattern density
  },
  // Vertex Shader (Standard)
  `
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader (The Pattern Logic)
  `
    uniform vec3 uColorBase;
    uniform vec3 uColorWave;
    uniform float uScale;
    
    varying vec2 vUv;
    varying vec3 vNormal;

    // Simple pseudo-random function
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    // 2D Noise function
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      // 1. Distortion Logic for "Fluid" look
      vec2 pos = vUv * uScale;
      float n = noise(pos);
      
      // Create wave lines using sine of the noise
      float wave = sin(pos.y + n * 4.0);
      
      // Soften the edges for a "blend" effect
      float mask = smoothstep(-0.2, 0.2, wave);
      
      // 2. Lighting (Matte/Soft)
      // We removed the sharp metallic speculars here
      vec3 lightDir = normalize(vec3(0.5, 1.0, 0.5));
      float diff = max(dot(vNormal, lightDir), 0.0);
      float lighting = 0.4 + 0.6 * diff; // Soft ambient blend

      // 3. Mix Colors
      vec3 finalColor = mix(uColorBase, uColorWave, mask);
      finalColor *= lighting; // Apply soft lighting

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

// ------------------------------------------------------------------
// SECTION 2: CONFIGURATION
// ------------------------------------------------------------------

type MaterialVariant = 'piano-black' | 'rubber-matte' | 'abstract-pattern';
type Axis = 'x' | 'y' | 'z';

interface CubeState {
  id: string; 
  gridPos: THREE.Vector3;
  worldPos: THREE.Vector3; 
  variant: MaterialVariant;
}

const CONFIG = {
  cubeSize: 1.0,
  gap: 0.015, 
  bevel: 0.08, 
  colorBlack: '#020202',
  colorMatte: '#111111',
  animationSpeed: 0.035, // Cinematic slow
  pauseDuration: 100, 
};

const TOTAL_UNIT = CONFIG.cubeSize + CONFIG.gap;

// ------------------------------------------------------------------
// SECTION 3: STANDARD MATERIALS
// ------------------------------------------------------------------

const MAT_PIANO = new THREE.MeshStandardMaterial({
  color: CONFIG.colorBlack,
  roughness: 0.05, 
  metalness: 0.2, // Reduced metalness for better blend
  envMapIntensity: 1.2,
});

const MAT_MATTE = new THREE.MeshStandardMaterial({
  color: CONFIG.colorMatte,
  roughness: 0.8, 
  metalness: 0.0,
});

// ------------------------------------------------------------------
// SECTION 4: HELPER FUNCTIONS
// ------------------------------------------------------------------

function snapToGrid(val: number): number {
  const snapped = Math.round(val / TOTAL_UNIT);
  return Math.max(-1, Math.min(1, snapped)) * TOTAL_UNIT;
}

function generateInitialState(): CubeState[] {
  const cubes: CubeState[] = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        const xPos = x * TOTAL_UNIT;
        const yPos = y * TOTAL_UNIT;
        const zPos = z * TOTAL_UNIT;
        
        const r = Math.random();
        let variant: MaterialVariant = 'piano-black';
        if (r > 0.55) variant = 'rubber-matte';
        if (r > 0.80) variant = 'abstract-pattern'; // New Variant Name

        cubes.push({
          id: THREE.MathUtils.generateUUID(),
          gridPos: new THREE.Vector3(x, y, z),
          worldPos: new THREE.Vector3(xPos, yPos, zPos),
          variant,
        });
      }
    }
  }
  return cubes;
}

// ------------------------------------------------------------------
// SECTION 5: COMPONENTS
// ------------------------------------------------------------------

const Cubie = React.memo(({ 
  position, 
  variant, 
  forwardRef 
}: { 
  position: THREE.Vector3; 
  variant: MaterialVariant;
  forwardRef: (node: THREE.Mesh | null) => void;
}) => {
  const isPattern = variant === 'abstract-pattern';
  const isMatte = variant === 'rubber-matte';
  
  // Create our new Abstract Pattern Material
  const patternMaterial = useMemo(() => new AbstractPatternMaterial(), []);

  // Select material instance
  const activeMaterial = isPattern ? patternMaterial : (isMatte ? MAT_MATTE : MAT_PIANO);

  return (
    <RoundedBox
      ref={forwardRef}
      args={[CONFIG.cubeSize, CONFIG.cubeSize, CONFIG.cubeSize]}
      radius={CONFIG.bevel}
      smoothness={4}
      position={position}
      castShadow
      receiveShadow
      material={activeMaterial}
    />
  );
});

Cubie.displayName = 'Cubie';

const SmartCube = () => {
  const [cubes] = useState<CubeState[]>(() => generateInitialState());
  
  const groupRef = useRef<THREE.Group>(null);
  const pivotRef = useRef<THREE.Group>(null);
  const cubeMeshRefs = useRef<Record<string, THREE.Mesh>>({});

  const engine = useRef({
    state: 'IDLE' as 'IDLE' | 'ROTATING',
    timer: 0,
    axis: 'x' as Axis,
    targetSlice: 0, 
    currentAngle: 0,
    targetAngle: Math.PI / 2, 
    activeIds: [] as string[],
    globalRot: { x: 0.003, y: 0.006 }
  });

  useEffect(() => {
    if (groupRef.current && pivotRef.current) {
      groupRef.current.add(pivotRef.current);
    }
  }, []);

  const pickNextMove = () => {
    const e = engine.current;
    
    // Pick Logic
    const axes: Axis[] = ['x', 'y', 'z'];
    e.axis = axes[Math.floor(Math.random() * axes.length)];
    
    const indices = [-1, 0, 1];
    e.targetSlice = indices[Math.floor(Math.random() * indices.length)] * TOTAL_UNIT;

    const dir = Math.random() > 0.5 ? 1 : -1;
    e.targetAngle = (Math.PI / 2) * dir;
    e.currentAngle = 0;

    // Identify Cubes
    e.activeIds = [];
    const epsilon = 0.1;

    Object.keys(cubeMeshRefs.current).forEach((id) => {
      const mesh = cubeMeshRefs.current[id];
      let pos = 0;
      if (e.axis === 'x') pos = mesh.position.x;
      if (e.axis === 'y') pos = mesh.position.y;
      if (e.axis === 'z') pos = mesh.position.z;

      if (Math.abs(pos - e.targetSlice) < epsilon) {
        e.activeIds.push(id);
      }
    });

    // Attach to Pivot
    if (pivotRef.current) {
      pivotRef.current.rotation.set(0,0,0);
      pivotRef.current.position.set(0,0,0);
      pivotRef.current.updateMatrixWorld();

      e.activeIds.forEach(id => {
        const mesh = cubeMeshRefs.current[id];
        pivotRef.current!.attach(mesh);
      });
    }

    e.state = 'ROTATING';
  };

  const completeMove = () => {
    const e = engine.current;
    if (!groupRef.current || !pivotRef.current) return;

    // Snap pivot
    if (e.axis === 'x') pivotRef.current.rotation.x = e.targetAngle;
    if (e.axis === 'y') pivotRef.current.rotation.y = e.targetAngle;
    if (e.axis === 'z') pivotRef.current.rotation.z = e.targetAngle;
    pivotRef.current.updateMatrixWorld();

    // Detach and Bake
    e.activeIds.forEach(id => {
      const mesh = cubeMeshRefs.current[id];
      groupRef.current!.attach(mesh);
      
      mesh.position.x = snapToGrid(mesh.position.x);
      mesh.position.y = snapToGrid(mesh.position.y);
      mesh.position.z = snapToGrid(mesh.position.z);
      
      mesh.rotation.x = Math.round(mesh.rotation.x / (Math.PI/2)) * (Math.PI/2);
      mesh.rotation.y = Math.round(mesh.rotation.y / (Math.PI/2)) * (Math.PI/2);
      mesh.rotation.z = Math.round(mesh.rotation.z / (Math.PI/2)) * (Math.PI/2);
      
      mesh.updateMatrix();
    });

    e.state = 'IDLE';
    e.timer = 0;
  };

  useFrame((_, delta) => {
    const e = engine.current;

    // Global Tumble
    if (groupRef.current) {
      groupRef.current.rotation.y += e.globalRot.y;
      groupRef.current.rotation.x += e.globalRot.x;
    }

    // Animation
    if (e.state === 'IDLE') {
      e.timer++;
      if (e.timer > CONFIG.pauseDuration) {
        pickNextMove();
      }
    } else if (e.state === 'ROTATING') {
      const step = CONFIG.animationSpeed;
      const remaining = Math.abs(e.targetAngle - e.currentAngle);
      let move = step;
      if (move > remaining) move = remaining;

      const sign = Math.sign(e.targetAngle);
      e.currentAngle += move * sign;

      if (pivotRef.current) {
        if (e.axis === 'x') pivotRef.current.rotation.x = e.currentAngle;
        if (e.axis === 'y') pivotRef.current.rotation.y = e.currentAngle;
        if (e.axis === 'z') pivotRef.current.rotation.z = e.currentAngle;
      }

      if (Math.abs(remaining) < 0.001) {
        completeMove();
      }
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={pivotRef} />
      {cubes.map((data) => (
        <Cubie
          key={data.id}
          position={data.worldPos}
          variant={data.variant}
          forwardRef={(node) => {
            if (node) cubeMeshRefs.current[data.id] = node;
          }}
        />
      ))}
    </group>
  );
};

// ------------------------------------------------------------------
// SECTION 6: MAIN PAGE COMPOSITION
// ------------------------------------------------------------------

export default function Page() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[5, 4, 6]} fov={35} />
        
        <ambientLight intensity={0.2} />
        
        {/* Main Key Light */}
        <spotLight 
          position={[8, 12, 8]} 
          angle={0.2} 
          penumbra={0.5} 
          intensity={80} 
          castShadow 
          color="#ffffff" 
        />

        {/* Rim Light */}
        <spotLight 
          position={[-5, 0, -5]} 
          intensity={15} 
          color="#ffffff" 
        />

        {/* Studio Environment for Clean Reflections */}
        <Environment preset="studio" />

        <SmartCube />

        <ContactShadows 
          position={[0, -3.5, 0]} 
          opacity={0.6} 
          scale={30} 
          blur={2} 
          far={5} 
          color="#000000"
        />
        
        <OrbitControls enablePan={false} minDistance={5} maxDistance={20} />
      </Canvas>
    </div>
  );
}