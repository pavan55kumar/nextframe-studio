export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

      <div className="absolute right-10 top-10 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[120px]" />
    </>
  );
}