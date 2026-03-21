import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, ContactShadows, useGLTF, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export function Phoenix() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  const { scene } = useGLTF('/mechanical_eagle.glb');

  useFrame((state) => {
    if (groupRef.current) {
      // Smoothly interpolate the group rotation based on mouse coordinates over time
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (mouse.x * Math.PI) / 8,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (mouse.y * Math.PI) / 16,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <primitive object={scene} scale={0.35} position={[0, -1, 0]} rotation={[0, Math.PI, 0]} />

        <Sparkles count={150} scale={5} size={6} speed={0.4} opacity={0.8} color="#ff9e00" />
      </Float>

      <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4} color="#000000" />
    </group>
  );
}

useGLTF.preload('/mechanical_eagle.glb');
