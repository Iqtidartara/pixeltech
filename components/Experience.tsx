import Image from "next/image";
import React from "react";

const cardsData = [
  {
    imageSrc: "/Ellipse 14.png",
    alt: "card1",
    description: "Unlimited design requests. One flat rate",
  },
  {
    imageSrc: "/Ellipse 15.png",
    alt: "card2",
    description: "Receive your design  in less than 3 days. We work 24/7.",
  },
  {
    imageSrc: "/Ellipse 13.png",
    alt: "card3",
    description: "Submit feedback. We'll provide revisions until you're 100% satisfied.",
  },
];

const Experience = () => {
  return (
    <section className="w-full py-[50px]">
      <main className="mx-auto max-w-[80rem] flex flex-col items-center justify-center">
        <h2 className="text-[#323232]  md:text-[40px] text-[32px] font-[700] md:leading-normal leading-[1.3] text-center">
          Like architecture, but with pixels. <br className="md:block hidden" />
          We&apos;ll build it for you.
        </h2>
        <p className="text-center text-[#323232] md:text-[24px] text-[1rem] font-[400] md:leading-[104.167%] leading-[1.3] mt-[20px]">
          From concept to conversion, we design & build
          <br className="md:block hidden" /> experiences that scale your
          business.
        </p>

        {/* cards */}
        <div className="flex flex-wrap justify-center gap-[20px]  ">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-[10px] max-w-[396px] px-[30px] rounded-[10px] md:w-[30%] sm:w-[45%] w-full py-[10px]  md:py-[167px]"
            >
              <Image src={card.imageSrc} alt={card.alt} width={80} height={80}  />
              <p className="leading-normal text-[20px] text-[#313131] font-[700] text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Experience;
