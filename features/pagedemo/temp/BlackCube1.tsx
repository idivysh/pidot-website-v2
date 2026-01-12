'use client';

import React, { useMemo, useRef, forwardRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// --- 1. Advanced Texture Generator ---
// Generates 3 types of maps: Noise (Granite/Rough), Lines (Brushed Metal), Dots (Tech)
function useProceduralMaps() {
  return useMemo(() => {
    if (typeof document === 'undefined') return null;

    const createTexture = (drawFn: (ctx: CanvasRenderingContext2D, w: number, h: number) => void) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (ctx) drawFn(ctx, 512, 512);
      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      return tex;
    };

    // 1. Noise Texture (for Galvanized/Rough looks)
    const noiseTexture = createTexture((ctx, w, h) => {
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 50000; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? '#a0a0a0' : '#606060';
        ctx.fillRect(Math.random() * w, Math.random() * h, 2, 2);
      }
    });

    // 2. Brushed Lines Texture (for Brushed Metal)
    const brushedTexture = createTexture((ctx, w, h) => {
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#555555';
      for (let i = 0; i < w; i += 2) {
         if(Math.random() > 0.7) ctx.fillRect(i, 0, 1, h); // Vertical lines
      }
    });

    // 3. Grid/Tech Texture
    const gridTexture = createTexture((ctx, w, h) => {
      ctx.fillStyle = '#111111';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#444444';
      const gap = 64;
      const r = 4;
      for (let x = 0; x < w; x += gap) {
        for (let y = 0; y < h; y += gap) {
          ctx.beginPath();
          ctx.arc(x + gap/2, y + gap/2, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    });

    return { noiseTexture, brushedTexture, gridTexture };
  }, []);
}

// --- 2. Cubelet with Material Archetypes ---
const Cubelet = forwardRef(({ position, materialId }: any, ref: any) => {
  const maps = useProceduralMaps();

  const materialProps = useMemo(() => {
    if (!maps) return {};
    const { noiseTexture, brushedTexture, gridTexture } = maps;

    // Define the 6 Unique Looks
    switch (materialId) {
      // --- BLACK VARIANTS ---
      case 0: // Black Piano (Glossy, smooth)
        return {
          color: '#050505',
          metalness: 0.0,
          roughness: 0.05,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1,
        };
      case 1: // Black Matte (Rubber/Clay feel)
        return {
          color: '#080808',
          metalness: 0.0,
          roughness: 0.9,
          bumpMap: noiseTexture,
          bumpScale: 0.02,
        };
      case 2: // Black Tech (Grid Pattern)
        return {
          color: '#000000',
          metalness: 0.4,
          roughness: 0.4,
          map: gridTexture, // The dots are visible
          bumpMap: gridTexture,
          bumpScale: 0.05,
        };

      // --- SILVER VARIANTS ---
      case 3: // Silver Chrome (Perfect Mirror)
        return {
          color: '#ffffff',
          metalness: 1.0,
          roughness: 0.0,
          envMapIntensity: 1.5,
        };
      case 4: // Silver Brushed (Industrial Steel)
        return {
          color: '#aaaaaa',
          metalness: 0.9,
          roughness: 0.3,
          roughnessMap: brushedTexture,
          bumpMap: brushedTexture,
          bumpScale: 0.02,
        };
      case 5: // Silver Galvanized (Rough/Speckled)
        return {
          color: '#dcdcdc',
          metalness: 0.7,
          roughness: 0.5,
          bumpMap: noiseTexture,
          bumpScale: 0.01,
        };
      
      default:
        return { color: 'black' };
    }
  }, [materialId, maps]);

  return (
    <RoundedBox
      ref={ref}
      args={[0.95, 0.95, 0.95]} 
      radius={0.05} 
      smoothness={4}
      position={position}
    >
      <meshPhysicalMaterial {...materialProps} />
    </RoundedBox>
  );
});
Cubelet.displayName = 'Cubelet';

// --- 3. The Assembly (Logic Updated for Mix) ---
const CubeAssembly = () => {
  const groupRef = useRef<THREE.Group>(null);
  const pivotRef = useRef<THREE.Group>(null);
  const cubeRefs = useRef<(THREE.Mesh | null)[]>([]);

  const state = useRef({
    isAnimating: false,
    rotationProgress: 0,
    targetRotation: Math.PI,
    nextMove: 'F', 
    cooldown: 1.0, 
  });

  const cubeData = useMemo(() => {
    const cubes = [];
    let index = 0;
    
    // We want a controlled random mix. 
    // Let's create a bag of material IDs and shuffle them to ensure even distribution.
    // 0-2 are Blacks, 3-5 are Silvers.
    const materialBag = [];
    // Add mostly Black variants, some Silver to make them pop
    for(let i=0; i<15; i++) materialBag.push(0, 1, 2); // 15 Blacks
    for(let i=0; i<12; i++) materialBag.push(3, 4, 5); // 12 Silvers
    // Shuffle
    materialBag.sort(() => Math.random() - 0.5);

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const materialId = materialBag[index % materialBag.length];
          cubes.push({ position: [x, y, z], materialId, id: index++ });
        }
      }
    }
    return cubes;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1; 
      groupRef.current.rotation.x += delta * 0.05;
    }

    if (!pivotRef.current || !groupRef.current) return;

    if (state.current.isAnimating) {
      const speed = 4.0 * delta; 
      state.current.rotationProgress += speed;

      if (state.current.rotationProgress >= state.current.targetRotation) {
        pivotRef.current.rotation.z = state.current.targetRotation;

        const children = [...pivotRef.current.children];
        children.forEach(child => {
            groupRef.current?.attach(child);
        });

        pivotRef.current.rotation.set(0,0,0);
        state.current.isAnimating = false;
        state.current.rotationProgress = 0;
        state.current.nextMove = state.current.nextMove === 'F' ? 'B' : 'F';
        state.current.cooldown = Math.random() * 2 + 0.5; 
      } else {
        pivotRef.current.rotation.z = state.current.rotationProgress;
      }

    } else {
      state.current.cooldown -= delta;

      if (state.current.cooldown <= 0) {
        const isFront = state.current.nextMove === 'F';
        cubeRefs.current.forEach((mesh) => {
          if (mesh) {
            if (isFront && mesh.position.z > 0.5) {
              pivotRef.current?.attach(mesh);
            } else if (!isFront && mesh.position.z < -0.5) {
              pivotRef.current?.attach(mesh);
            }
          }
        });
        state.current.isAnimating = true;
      }
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={pivotRef} />
      {cubeData.map((data, i) => (
        <Cubelet 
            key={i} 
            // @ts-ignore
            ref={(el) => (cubeRefs.current[i] = el)}
            position={data.position} 
            materialId={data.materialId} 
        />
      ))}
    </group>
  );
};

// --- 4. Main Scene ---
export default function BlackSilverScene() {
  return (
    <div style={{ width: '100%', height: '100vh', background: '#000' }}>
      <Canvas 
        dpr={[1, 2]}
        camera={{ position: [5, 5, 5], fov: 40 }}
        gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.0 }}
      >
        <color attach="background" args={['#050505']} />
        
        {/* Studio Lighting to emphasize material differences */}
        <Environment preset="city" />
        
        {/* Main Key Light */}
        <spotLight 
          position={[10, 15, 10]} 
          angle={0.25} 
          penumbra={1} 
          intensity={200} 
          castShadow 
          color="#ffffff"
        />
        {/* Rim Light for edges */}
        <spotLight 
            position={[-10, 0, -5]}
            intensity={100}
            color="#4455ff"
            angle={0.5}
        />

        <CubeAssembly />
        
        <ContactShadows 
            position={[0, -2.5, 0]} 
            opacity={0.6} 
            scale={15} 
            blur={3} 
            far={4.5} 
            color="#000000"
        />

        <OrbitControls 
          enableZoom={false} 
          autoRotate={true} 
          autoRotateSpeed={2.0} 
          enableDamping={true}
        />
      </Canvas>
    </div>
  );
}