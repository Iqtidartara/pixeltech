import AppsWesite from "@/components/AppsWesite";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Faq from "@/components/Faq";
import HomeSection from "@/components/HomeSection";
import MarqueeImg from "@/components/MarqueeImg";
import Ordinary from "@/components/Ordinary";
import PricingSection from "@/components/PricingSection";
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
     <PricingSection/>
      <AppsWesite/>
      <Faq/>
      <Banner/>
    </div>
  );
}
