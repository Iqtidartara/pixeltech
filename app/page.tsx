import AppsWesite from "@/components/AppsWesite";
import Experience from "@/components/Experience";
import HomeSection from "@/components/HomeSection";
import MarqueeImg from "@/components/MarqueeImg";
import Ordinary from "@/components/Ordinary";
import RecentWork from "@/components/RecentWork";
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
      <RecentWork />
      <AppsWesite/>
    </div>
  );
}
