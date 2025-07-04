import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, SpotLight } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const { scene } = useGLTF('/UFO_Empty.glb');
  const modelRef = useRef();
  const beamRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Randomized smooth path (Perlin-style sine waves)
    modelRef.current.position.x = Math.sin(t * 0.3) * 2;
    modelRef.current.position.y = Math.sin(t * 0.6) * 0.5 + 1;
    modelRef.current.position.z = Math.cos(t * 0.3) * 2;

    modelRef.current.rotation.y = t * 0.5;
    modelRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;

    // Pulsing beam light
    if (beamRef.current) {
      beamRef.current.intensity = 1.5 + Math.sin(t * 4) * 0.5;
    }
  });

  return (
    <group>
      <primitive ref={modelRef} object={scene} scale={0.8} />
      
      {/* Beam Light */}
      <spotLight
        ref={beamRef}
        position={[0, -1, 0]}
        angle={0.3}
        distance={5}
        penumbra={0.5}
        decay={2}
        color="cyan"
        intensity={2}
        castShadow
        target={new THREE.Object3D()}
      />
    </group>
  );
};

const SpaceshipViewer = () => {
  return (
    <Canvas camera={{ position: [0, 3, 10], fov: 50 }} shadows>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default SpaceshipViewer;
