import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { ContactShadows, useGLTF, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export function Phoenix() {
  const groupRef = useRef<THREE.Group>(null);
  const modelRef = useRef<THREE.Object3D>(null);
  const { mouse } = useThree();
  const { scene } = useGLTF('/mechanical_eagle.glb');

  // Apply a subtle emissive tint on supported materials for a premium glow effect.
  useEffect(() => {
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh || !mesh.material) return;

      const applyGlow = (material: THREE.Material) => {
        if (material instanceof THREE.MeshStandardMaterial || material instanceof THREE.MeshPhysicalMaterial) {
          material.emissive = material.emissive.clone().lerp(new THREE.Color('#ff7a2f'), 0.12);
          material.emissiveIntensity = 0.18;
        }
      };

      if (Array.isArray(mesh.material)) {
        mesh.material.forEach(applyGlow);
      } else {
        applyGlow(mesh.material);
      }
    });
  }, [scene]);

  useFrame(({ clock }, delta) => {
    const group = groupRef.current;
    const model = modelRef.current;
    if (!group || !model) return;

    const t = clock.getElapsedTime();

    // Frame-rate independent lerp factor for smooth cursor follow on all devices.
    const followAlpha = 1 - Math.exp(-4 * delta);

    const targetRotY = mouse.x * 0.24;
    const targetRotX = mouse.y * 0.12;
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetRotY, followAlpha);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetRotX, followAlpha);

    // Slow premium floating motion.
    const floatY = -1 + Math.sin(t * 0.8) * 0.18;
    group.position.y = THREE.MathUtils.lerp(group.position.y, floatY, followAlpha);

    // Subtle wing-flap illusion via mild z-axis oscillation.
    const flapZ = Math.sin(t * 2.1) * 0.035;
    model.rotation.z = THREE.MathUtils.lerp(model.rotation.z, flapZ, followAlpha);
  });

  return (
    <group ref={groupRef}>
      <primitive
        ref={modelRef}
        object={scene}
        scale={0.35}
        position={[0, -1, 0]}
        rotation={[0, Math.PI, 0]}
      />

      <Sparkles count={150} scale={5} size={6} speed={0.4} opacity={0.8} color="#ff9e00" />

      <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4} color="#000000" />
    </group>
  );
}

useGLTF.preload('/mechanical_eagle.glb');
