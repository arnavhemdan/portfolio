import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Avatar = () => {
  const { scene, animations } = useGLTF('/avatar.glb');
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive object={scene} scale={1.7} position={[0.8, -2, 0]} />;
};

const AvatarModel = () => {
  return (
    <Canvas
      frameloop='always'
      shadows
      camera={{ position: [0, 1, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Avatar />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default AvatarModel;
