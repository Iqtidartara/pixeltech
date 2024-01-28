import { url } from "inspector";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="w-full relative overflow-x-clip"
    >
{/* background color */}
      <div className="absolute -top-80 -left-80 Shadowtopleft  "></div>
      <div className="absolute -top-20 -right-20 shadowtopright "></div>
      <Image src={"/largestar.png"} alt="star" width={20} height={20} className="absolute left-[394px] top-[59px]  md:block hidden"/>
      <Image src={"/largestar.png"} alt="star" width={12} height={12} className="absolute left-[294px] top-[349px]  md:block hidden"/>
      <Image src={"/largestar.png"} alt="star" width={18} height={18} className="absolute right-[420px] top-[175px]  md:block hidden"/>
      <Image src={"/largestar.png"} alt="star" width={36} height={36} className="absolute right-[158px] top-[375px]  md:block hidden "/>



{/* end */}
      <main className="mx-auto max-w-[80rem] flex flex-col items-center justify-center">
        <h1 className="text-center md:text-[48px] text-[40px]  font-[700] leading-normal">
          <span className="pixel">Pixel</span>
          <span className="tech">tect</span>
        </h1>

        <h6 className="mt-[81.91px] text-[#323232] text-center md:text-[60px] text-[32px] font-[700] md:leading-normal leading-[1.3]">
          A design subscription <br className="md:block hidden"/> designed for you
        </h6>
        <p className="md:text-[24px] text-[1rem] text-[#323232] font-[400] leading-normal text-center my-[30px] ">
          No commitments. Pause or cancel at any time.
        </p>
        <Button className="btn text-[#FFF] text-[17px] tracking-[0.375px] font-[700] leading-[88.235%] translate-y-0 hover:-translate-y-2 transition delay-100 ">Get started</Button>
      </main>
    </section>
  );
};

export default HomeSection;
