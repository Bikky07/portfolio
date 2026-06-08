import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Stars
} from "@react-three/drei";

function FloatingSphere({
  position,
  color,
  size
}) {
  return (
    <Float
      speed={2}
      rotationIntensity={2}
      floatIntensity={2}
    >
      <mesh position={position}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial
          color={color}
          metalness={1}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function TorusRing() {
  return (
    <Float
      speed={3}
      rotationIntensity={3}
      floatIntensity={1}
    >
      <mesh rotation={[1.5, 0, 0]}>
        <torusGeometry args={[2.5, 0.08, 32, 100]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#2563eb"
          emissiveIntensity={1}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>

      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <pointLight
        position={[-5, -5, -5]}
        intensity={2}
        color="#8b5cf6"
      />

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />

      <FloatingSphere
        position={[-3, 2, 0]}
        color="#60a5fa"
        size={0.6}
      />

      <FloatingSphere
        position={[3, -1, 0]}
        color="#8b5cf6"
        size={0.8}
      />

      <FloatingSphere
        position={[2, 2, -2]}
        color="#06b6d4"
        size={0.4}
      />

      <TorusRing />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />

    </Canvas>
  );
}