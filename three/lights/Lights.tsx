export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        color="#e0e7ff"
      />

      <pointLight
        position={[2, 2, 2]}
        color="#8b5cf6"
        intensity={4}
        distance={12}
        decay={2}
      />

      <pointLight
        position={[-3, -2, 3]}
        color="#38bdf8"
        intensity={2.5}
        distance={10}
        decay={2}
      />
    </>
  );
}