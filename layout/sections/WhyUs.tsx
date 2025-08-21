"use client";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { Text } from "../ui/Text";
import { cn } from "@/lib/utils";
import { workSans_400, workSans_500, workSans_700 } from "@/config/font";
import Image from "next/image";
import { fadeIn } from "@/config/varient";
import { motion as m } from "framer-motion";

const data = [
  {
    title: "Trusted Expertise",
    desc: "With a commitment to integrity and professionalism, we treat your books like our own.",
  },
  {
    title: "Stress-Free Bookkeeping",
    desc: "No more spreadsheets or late-night number crunching. We handle the details so you can focus on your business.",
  },
  {
    title: "Accurate & Timely Reports",
    desc: "We deliver clear financial insights you can trust — on time, every time.",
  },
];

function WhyUs() {
  return (
    <section className="py-6 lg:py-20 pb-20 lg:pb-56">
      <Wrapper>
        <div>
          <div className="flex flex-col items-end md:mt-5 md:ml-10 lg:ml-20 lg:mr-auto">
            <m.div
              // @ts-ignore
              variants={fadeIn("left", 0.3)}
              viewport={{ once: true, amount: 0.7 }}
              initial="hidden"
              whileInView={"show"}
            >
              <div className="w-28 lg:w-40 h-[1.5px] lg:h-[2.2px] bg-[#052541]" />
              <Text
                as="h6"
                className={cn(
                  "text-center text-xl md:text-3xl lg:text-[40px]",
                  workSans_700.className
                )}
              >
                Why Choose Us
              </Text>
            </m.div>
            <m.div
              // @ts-ignore
              variants={fadeIn("left", 0.4)}
              viewport={{ once: true, amount: 0.7 }}
              initial="hidden"
              whileInView={"show"}
            >
              <Text
                as="p"
                className={cn(
                  "text-xs text-[#666] leading-5 lg:text-base xl:text-lg lg:leading-7 text-right md:text-left mt-3 max-w-[350px] lg:max-w-[486px]",
                  workSans_400.className
                )}
              >
                Experience reliable bookkeeping with a personal touch — built
                for clarity, growth, and peace of mind.
              </Text>
            </m.div>

            <m.div
              // @ts-ignore
              variants={fadeIn("left", 0.5)}
              viewport={{ once: true, amount: 0.7 }}
              initial="hidden"
              whileInView={"show"}
              className="mt-5 flex items-center gap-x-2.5 bg-[#FB9F28] w-fit p-3 px-7 rounded-full"
            >
              <Text
                as="span"
                className={cn(
                  "text-white text-sm lg:text-base",
                  workSans_500.className
                )}
              >
                Get Started
              </Text>
            </m.div>
          </div>

          <m.div
            // @ts-ignore
            variants={fadeIn("up", 0.3)}
            viewport={{ once: true, amount: 0.7 }}
            initial="hidden"
            whileInView={"show"}
            className="relative"
          >
            <div className="bg-[#fff8ee] rounded-full -z-10 w-[137px] h-[137px] md:w-[280px] md:h-[280px] lg:w-[456px] lg:h-[456px] absolute -top-10 -left-[100px] lg:-left-[250px]" />

            <div className="absolute -top-20 xl:-top-28 left-20 w-full h-full hidden lg:inline-block">
              <Image
                src={"/line.svg"}
                alt="line asset"
                width={1165}
                height={409}
              />
            </div>

            <div className="flex flex-col items-center">
              {data.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={cn(
                      "w-[300px]",
                      i === 0 && "mr-auto",
                      i === 1 && "mx-auto lg:-mt-24",
                      i === 2 && "ml-auto lg:-mt-36"
                    )}
                  >
                    <div
                      className={cn(
                        "text-[204px] text-black/10 leading-none text-right w-fit ml-auto -mb-14",
                        workSans_700.className
                      )}
                    >
                      {data.length - i}
                    </div>
                    <Text
                      as="h6"
                      className={cn(
                        "text-[#052541] mb-1",
                        workSans_700.className
                      )}
                      styleTag="md"
                    >
                      {item.title}
                    </Text>
                    <Text
                      styleTag="md"
                      className={cn(
                        "text-[#64607d] leading-6",
                        workSans_400.className
                      )}
                    >
                      {item.desc}
                    </Text>
                  </div>
                );
              })}
            </div>
          </m.div>
        </div>
      </Wrapper>
    </section>
  );
}

export default WhyUs;
