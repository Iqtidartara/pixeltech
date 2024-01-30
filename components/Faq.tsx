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
      "Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.                                                                                                                                                      With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.",
  },
  {
    question: "Is there a limit to how many requests I can have?",
    answer:
      "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
  },
  {
    question: "How fast will I receive my designs?",
    answer:
      "On average, most requests are completed in just two days or less. However, more complex requests can take longer.",
  },
  {
    question: "Who are the designers?",
    answer:
      "You might be surprised to hear this, but Designjoy is actually an agency of one. This means you'll work directly with me, founder of Designjoy. However, power-ups requests such as animations or custom illustrations are provided by partner designers.",
  },
  {
    question: "How does the pause feature work?",
    answer:
      "We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy. Billing cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.",
  },
  {
    question: "What programs do you design in?",
    answer:
      "Most requests are designed using Figma.",
  },
  {
    question: "How do I request designs?",
    answer:
      "Designjoy offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "No worries! We'll continue to revise the design until you're 100% satisfied.",
  },
  {
    question: "Is there any design work you don't cover?",
    answer:
      "Absolutely. Designjoy does not cover the following design work: 3D modeling, animated graphics (GIFS, etc.), document design (medical forms, etc.), complex packaging, and extensive print design (magazines, books, etc.).",
  },
  {
    question: "What if I only have a single request?",
    answer:
      "That's fine. You can pause your subscription when finished and return  when you have additional design needs. There's no need to let the remainder of your subscription go to waste.",
  },
  {
    question: "Are there any refunds if I don't like the service?",
    answer:
      "Due to the high quality nature of the work, there will be no refunds issued.",
  },

  
];

const Faq: React.FC = () => {
  return (
    <section className="w-full ">
      {/* Your existing code remains unchanged */}
      <div className="w-full max-w-[70rem] mx-auto px-4 md:py-36 py-1  ">
      <h2 className="md:text-[50px] text-[2rem] text-[#323232] font-[700] leading-normal text-center ">FAQS</h2>

      <div className="flex flex-col gap-3 md:mt-[3.94rem] mt-[.5rem]">
        {faqs.map((faq, index) => (
          <Accordion
            key={`faq-${index}`}
            type="single"
            collapsible
            className="rounded-md   md:p-[1.14rem] p-3"
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
