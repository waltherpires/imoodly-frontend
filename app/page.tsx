

import Hero from "@/components/home/Hero";
import OurServices from "@/components/home/OurServices";
import WhoSection from "@/components/home/WhoSection";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoSection />
      <OurServices />
    </>
  );
}
