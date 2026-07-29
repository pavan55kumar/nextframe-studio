import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import ScrollProgress from "@/components/layout/ScrollProgress";
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <div className="h-[200vh] bg-black"></div>
    </>
  );
}