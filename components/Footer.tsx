import { Facebook, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full footer ">
      <main className="  bg-[#fff] rounded-b-[59px] py-[45px] gap-10">
        <div className="flex justify-between max-w-[80rem] mx-auto">
          <div className="flex justify-center items-center gap-10">
            <h1 className="text-[25.223px] font-[700]"> <span className="pixel">Pixel</span><span className="tech">tect</span></h1>
            <div className="flex justify-center items-center gap-4">
              <Image src="/kack.png" alt="icon" width={40} height={37} />
              <p className="text-[20px] text-[#323232] font-[400] leading-normal">
                Pixeltect is headquartered in <br className="md:block hidden"/> Atlanta, Georgia.
              </p> 
              
            </div>
            
          </div>
          <div className="flex gap-9  max-w-[80rem] mx-auto ">
            <div className="">
              <h5 className="text-[10.495px] text-[#323232] font-[500] leading-normal">Latest projects</h5>
              <h5 className="text-[10.495px] text-[#323232] font-[500] leading-normal">Pricing</h5>
              <h5 className="text-[10.495px] text-[#323232] font-[500] leading-normal">Contact</h5>
            </div>
            <div className="">
              <h5 className="text-[10.495px] text-[#323232] font-[500] leading-normal">Client login</h5>
              <h5 className="text-[10.495px] text-[#323232] font-[500] leading-normal">Get started</h5>
              <h5 className="text-[10.495px] text-[#323232] font-[500] leading-normal">Terms & conditions</h5>
              <h5 className="text-[10.495px] text-[#323232] font-[500] leading-normal">Privacy policy</h5>

            </div>
          </div>
          
        </div>
        <div className="flex gap-5  max-w-[80rem] mx-auto">
            <Facebook />
            <Twitter />
         <Youtube/>
        </div>
       
      </main>
  <div className="flex justify-between items-center max-w-[80rem] mx-auto px-12 py-[30px]">
      <p className="text-[10.495px] text-[#FAFAFA] font-[400] leading-normal">© Copyright by  PixelTect - All right reserved.</p>
      <p className="text-[10.495px] text-[#FAFAFA] font-[400] leading-normal">Pixeltect platforms was officially designed by Messum</p>
  </div>

    </section>
  );
};

export default Footer;
