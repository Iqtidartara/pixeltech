import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Why wouldn't I just hire a full-time designer?",
    answer:
      "Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.           With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.",
  },
  {
    question: "Is there a limit to how many requests I can have?",
    answer:
      "",
  },
  {
    question: "How fast will I receive my designs?",
    answer:
      "",
  },
  {
    question: "Who are the designers?",
    answer:
      "",
  },
  {
    question: "How does the pause feature work?",
    answer:
      "",
  },
  {
    question: "What programs do you design in?",
    answer:
      "",
  },
  {
    question: "How do I request designs?",
    answer:
      "",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "",
  },
  {
    question: "Is there any design work you don't cover?",
    answer:
      "",
  },
  {
    question: "What if I only have a single request?",
    answer:
      "",
  },
  {
    question: "Are there any refunds if I don't like the service?",
    answer:
      "",
  },

  
];

const Faq: React.FC = () => {
  return (
    <section className="w-full ">
      {/* Your existing code remains unchanged */}
      <div className="w-full max-w-[70rem] mx-auto px-4 md:py-36 py-1  ">
      <div className="flex flex-col gap-3 md:mt-[3.94rem] mt-[1.5rem]">
        {faqs.map((faq, index) => (
          <Accordion
            key={`faq-${index}`}
            type="single"
            collapsible
            className="rounded-md   p-[1.14rem]"
          >
            <AccordionItem value={`item-${index}`} className="py-4 px-4">
              <AccordionTrigger className="text-[#323232] leading-[147.9%] text-[20px] font-[700]  ">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#313131] text-[17px]  mt-2 leading-[147.9%] font-[400] ">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      </div>
  
    </section>
  );
};

export default Faq;
