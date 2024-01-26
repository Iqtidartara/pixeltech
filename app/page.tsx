import Experience from "@/components/Experience";
import HomeSection from "@/components/HomeSection";
import MarqueeImg from "@/components/MarqueeImg";
import Ordinary from "@/components/Ordinary";
import Resourcess from "@/components/Resourcess";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <HomeSection/>
      <MarqueeImg/>
      <Skills />
      <Experience />
      <Resourcess />
      <Ordinary/>
    </div>
  );
}
