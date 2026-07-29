export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[2, 2, 2]}
        color="#8b5cf6"
        intensity={15}
      />

      <pointLight
        position={[-2, -2, 2]}
        color="#00ffff"
        intensity={10}
      />
    </>
  );
}