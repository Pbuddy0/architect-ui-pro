import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Grid() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((s) => (mesh.current.rotation.z = s.clock.elapsedTime * 0.1));
  return (
    <mesh ref={mesh}>
      <torusGeometry args={[2, 0.01, 16, 100]} />
      <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={2} />
    </mesh>
  );
}
export default function NeuralPulse() { return <div className="h-64 w-full bg-black rounded-xl overflow-hidden"><Canvas><Grid /></Canvas></div>; }