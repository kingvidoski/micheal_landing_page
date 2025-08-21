"use client";

import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import { Text } from "../ui/Text";
import { cn } from "@/lib/utils";
import { workSans_400, workSans_500, workSans_700 } from "@/config/font";
import { AccordionItem } from "@/components/Accordion";
import { motion as m } from "framer-motion";
import { fadeIn } from "@/config/varient";

const accordionData = [
  {
    title: "What services do you offer as a financial accounting consultant?",
    content:
      "I provide services such as bookkeeping, financial reporting, tax preparation, auditing support, business advisory, and strategic financial planning tailored to your business needs.",
  },
  {
    title: "How can financial consulting benefit my business?",
    content:
      "Financial consulting helps you make informed decisions, manage cash flow effectively, reduce risks, stay compliant with regulations, and plan for long-term growth.",
  },
  {
    title: "Do you work with individuals as well as businesses?",
    content:
      "Yes, I work with both individuals and businesses—ranging from startups to established organizations—helping with personal financial management, tax planning, and investment strategies.",
  },
  {
    title: "How do you ensure confidentiality of financial information?",
    content:
      "Confidentiality is a top priority. I follow strict professional standards, use secure systems, and ensure all client information remains private and protected.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-6 pb-12 lg:py-20">
      <Wrapper>
        <m.div
          // @ts-ignore
          variants={fadeIn("up", 0.3)}
          viewport={{ once: true, amount: 0.5 }}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="h-[2px] lg:h-[3px] w-[150px] lg:w-[191px] bg-[#052541] mx-auto mb-1" />
          <Text
            as="h6"
            className={cn(
              "text-center text-xl md:text-3xl lg:text-[40px]",
              workSans_700.className
            )}
          >
            Frequently Asked Questions
          </Text>
        </m.div>

        <div className="flex items-start md:items-center md:my-6 lg:mt-11 justify-between flex-wrap">
          <div className="max-w-[485px] md:max-w-[350px] xl:max-w-[485px] mt-4 md:mt-8 md:flex-1">
            <m.div
              // @ts-ignore
              variants={fadeIn("right", 0.3)}
              viewport={{ once: true, amount: 0.5 }}
              initial="hidden"
              whileInView={"show"}
            >
              <Text
                as="span"
                className={cn(
                  "lg:text-lg text-[#666] text-xs",
                  workSans_400.className
                )}
              >
                Reach out to us
              </Text>
            </m.div>
            <m.div
              // @ts-ignore
              variants={fadeIn("right", 0.4)}
              viewport={{ once: true, amount: 0.5 }}
              initial="hidden"
              whileInView={"show"}
            >
              <Text
                as="h6"
                className={cn(
                  "text-base lg:text-[35px] text-[#052541]",
                  workSans_500.className
                )}
              >
                Have any question?
              </Text>
            </m.div>
            <m.div
              // @ts-ignore
              variants={fadeIn("right", 0.5)}
              viewport={{ once: true, amount: 0.1 }}
              initial="hidden"
              whileInView={"show"}
            >
              <Text
                as="p"
                className={cn(
                  "leading-5 lg:text-[15px] lg:leading-6 xl:text-lg xl:leading-7 text-[#666] text-xs mt-1 md:mt-3",
                  workSans_400.className
                )}
              >
                Find quick answers to common questions about our bookkeeping
                services, how we work, and what you can expect. We're here to
                make your finances simple and stress-free.
              </Text>
            </m.div>
          </div>

          {/* RIGHT */}
          <m.div
            // @ts-ignore
            variants={fadeIn("up", 0.45)}
            viewport={{ once: true, amount: 0.5 }}
            initial="hidden"
            whileInView={"show"}
            className="mt-5 md:max-w-[400px] lg:max-w-[490px] md:flex-1 "
          >
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                index={index}
                isOpen={index === openIndex}
                onClick={() => toggleAccordion(index)}
              >
                {item.content}
              </AccordionItem>
            ))}
          </m.div>
        </div>
      </Wrapper>
    </section>
  );
}

export default FAQ;
