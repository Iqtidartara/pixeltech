import { Facebook, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full footer">
      <main className="bg-[#fff] rounded-b-[59px] py-6 md:py-12 lg:py-16">
        <div className="flex flex-col md:flex-row justify-between max-w-[80rem] mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10 mb-6 md:mb-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="pixel">Pixel</span>
              <span className="tech">tect</span>
            </h1>
            <div className="flex gap-2 md:gap-4 items-center">
              <Image src="/kack.png" alt="icon" width={40} height={37} />
              <p className="text-sm md:text-base text-[#323232] font-normal leading-normal">
                Pixeltect is headquartered in Atlanta, Georgia.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:items-start items-center justify-start">
            <div className="text-[15.495px] text-[#323232] font-[500] leading-normal">
              <h5>Latest projects</h5>
              <h5>Pricing</h5>
              <h5>Contact</h5>
            </div>
            <div className="text-[15.495px] text-[#323232] font-[500] leading-normal">
              <h5>Client login</h5>
              <h5>Get started</h5>
              <h5>Terms & conditions</h5>
              <h5>Privacy policy</h5>
            </div>
          </div>
        </div>
        <div className="flex  md:justify-start justify-center gap-4 md:gap-5 max-w-[80rem] mx-auto mt-6 md:mt-9">
          <Image src="/Facebook.png" alt="icon" width={80} height={80} className="w-fit h-12 md:w-fit md:h-20" />
          <Image src="/Twitter.png" alt="icon" width={80} height={80} className="w-fit h-12 md:w-fit md:h-20" />
          <Image src="/Youtube.png" alt="icon" width={80} height={80} className="w-fit h-12 md:w-fit md:h-20" />
        </div>
      </main>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[80rem] mx-auto px-4 md:px-12 py-4 md:py-6 lg:py-8">
        <p className="text-xs md:text-sm text-[#FAFAFA] font-normal leading-normal">
          © Copyright by PixelTect - All rights reserved.
        </p>
        <p className="text-xs md:text-sm text-[#FAFAFA] font-normal leading-normal">
          Pixeltect platform was officially designed by Messum
        </p>
      </div>
    </section>
  );
};

export default Footer;
