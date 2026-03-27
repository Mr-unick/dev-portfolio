"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, MeshDistortMaterial, Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <TorusKnot ref={meshRef} args={[1, 0.3, 200, 32]} scale={1.2}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0}
          metalness={1}
          emissive="#4f46e5"
          emissiveIntensity={0.5}
        />
      </TorusKnot>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 bg-zinc-950">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#d946ef" />
        <AnimatedShape />
        <Environment preset="city" />
        <ContactShadows 
          position={[0, -2.5, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2} 
          far={4.5} 
        />
      </Canvas>
    </div>
  );
}
