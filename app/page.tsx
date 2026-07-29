import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Work from "@/components/work/Work";
import Services from "@/components/services/Services";
import ScrollProgress from "@/components/layout/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Work />
      <Services />
    </>
  );
}