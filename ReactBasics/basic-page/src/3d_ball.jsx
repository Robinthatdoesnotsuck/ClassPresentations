import { Canvas } from '@react-three/fiber';

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere />
    </Canvas>
  );
}