import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function LiquidGlass() {
  return (
    <div className="h-64 w-full bg-slate-950 rounded-xl overflow-hidden">
      <Canvas><ambientLight intensity={1} /><Sphere args={[1, 100, 200]} scale={2.2}><MeshDistortMaterial color="#6366F1" distort={0.6} speed={3} roughness={0} /></Sphere></Canvas>
    </div>
  );
}