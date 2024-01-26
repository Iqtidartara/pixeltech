import React from "react";
import Marquee from "react-fast-marquee";

const skillsData = [
  { text: "Logos", width: "151px" },
  { text: "Websites", width: "151px" },
  { text: "Branding", width: "151px" },
  { text: "SaaS", width: "151px" },
  { text: "Mobile Apps", width: "191px" },
  { text: "Wireframes", width: "151px" },
  { text: "Logos", width: "151px" },
  { text: "Websites", width: "151px" },
  { text: "Branding", width: "151px" },
  { text: "SaaS", width: "151px" },
  { text: "Mobile Apps", width: "191px" },
  { text: "Wireframes", width: "151px" },
];

const Skills = () => {
  return (
    <section className="w-full py-[10px]  skillbg ">
      <Marquee>
        {skillsData.map((skill, index) => (
          <p
            key={index}
            className={`text-[#323232] font-[400] leading-normal text-[24px] text-center flex justify-center items-center mr-8 px-4 skill w-[${skill.width}] h-[60px]`}
          >
            {skill.text}
          </p>
        ))}
      </Marquee>
    </section>
  );
};

export default Skills;
