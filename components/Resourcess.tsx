import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Resourcess = () => {
  return (
    <section className="w-full py-[90px]">
      <main className="mx-auto max-w-[80rem] resosrcolor pt-[60px]">
        {/* heading para and utton */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#323232] md:text-[40px] text-[2rem] font-[700] leading-normal md:leading-[1.2] text-center">
            Seamless design. Simplified
          </h1>
          <p className="md:text-[22px] text-[1rem] text-[#323232] font-[400] md:leading-[113.636%] leading-normal tracking-[0.22px] text-center my-[10px] md:my-[30px]">
            Design shouldn&apos;t be a headache. Pixeltect takes the stress{" "}
            <br className="md:block hidden" /> out of your design journey,
            delivering stunning design <br className="md:block hidden" />{" "}
            seamlessly. One subscription, endless possibilities.
          </p>
          <Button className="resourcbtn translate-y-0 hover:-translate-y-2 transition delay-100 ">
            Get Started
          </Button>
        </div>
        {/* image and other content */}
        <div className="w-full  md:px-[100px] md:py-[100px] px-4 py-4 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <Image
              src="/amico.png"
              alt="star"
              width={420}
              height={377}
              className="w-auto h-auto"
              
            />
          </div>
          <div className="md:w-1/2  w-full">
          <h1 className="text-[#313131] text-[20px] font-[600] leading-[147.9%] ">Say less</h1>
          <p className="text-[#313131] text-[17px] font-[400] leading-[147.9%] mb-[20px] ">Say goodbye to meeting madness. Design requests are our love language.</p>


          <h1 className="text-[#313131] text-[20px] font-[600] leading-[147.9%] ">The good kind of board</h1>
          <p className="text-[#313131] text-[17px] font-[400] leading-[147.9%] mb-[20px] ">Manage everything using your Trello board. See what&apos;s on deck, what&apos;s in motion, and what&apos;s ready to launch, all in one glance.</p>


          <h1 className="text-[#313131] text-[20px] font-[600] leading-[147.9%] ">It&apos;s a party</h1>
          <p className="text-[#313131] text-[17px] font-[400] leading-[147.9%] mb-[20px] ">Invite your entire team to contribute, collaborate, and celebrate design wins.</p>


         

          </div>
        </div>
      </main>
    </section>
  );
};

export default Resourcess;
