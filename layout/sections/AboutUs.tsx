"use client";

import Wrapper from "@/components/Wrapper";
import React from "react";
import { Text } from "../ui/Text";
import { workSans_400, workSans_700 } from "@/config/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import HeaderText from "../ui/HeaderText";
import { motion as m } from "framer-motion";
import { fadeIn } from "@/config/varient";
import Link from "next/link";

function AboutUs() {
  return (
    <section className="py-6 pb-12 lg:pb-20">
      <Wrapper>
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 gap-y-20 lg:gap-x-[15%]">
          <div className="flex flex-col max-md:items-center items-start md:mt-10 lg:mr-auto md:max-w-[80%] flex-1 max-md:mx-auto">
            <m.div
              // @ts-ignore
              variants={fadeIn("right", 0.1)}
              viewport={{ once: true, amount: 0.1 }}
              initial="hidden"
              whileInView={"show"}
            >
              <div className=" w-20 lg:w-28 h-[1.5px] lg:h-[2.2px] bg-[#052541]" />
              <HeaderText
                title="About Us"
                className="md:ml-0 max-md:text-center border-none"
              />
            </m.div>
            <m.div
              // @ts-ignore
              variants={fadeIn("right", 0.3)}
              viewport={{ once: true, amount: 0.1 }}
              initial="hidden"
              whileInView={"show"}
            >
              <Text
                as="p"
                className={cn(
                  "text-xs text-[#666] leading-5 lg:text-base xl:text-lg lg:leading-7 text-center md:text-left mt-3 max-w-[460px] lg:max-w-[586px] mx-auto",
                  workSans_400.className
                )}
              >
                At Michael Alagbe accounting & financial services, we're
                passionate about helping small businesses thrive through smart,
                reliable financial management. We specialize in providing
                accurate, timely, and personalized bookkeeping solutions that
                give business owners clarity and control over their finances.
              </Text>
            </m.div>

            <Link href={"/Contact_Us"}>
              <m.div
                // @ts-ignore
                variants={fadeIn("right", 0.5)}
                viewport={{ once: true, amount: 0.1 }}
                initial="hidden"
                whileInView={"show"}
                className="bg-[#fb9f28] rounded-full flex items-center p-1 pl-3 lg:p-1.5 lg:pl-5 my-8"
              >
                <Text
                  as="span"
                  className={cn(
                    "text-[10px] md:text-xs lg:text-base text-white",
                    workSans_700.className
                  )}
                >
                  Book Session
                </Text>
                <div className="bg-white ml-3 rounded-full w-[29px] h-[29px] lg:w-[44px] lg:h-[44px] flex items-center justify-center">
                  <Image
                    src={"/arrow_right.svg"}
                    alt="arrow right"
                    width={6}
                    height={12}
                    className="lg:w-3 lg:h-3 ml-1"
                  />
                </div>
              </m.div>
            </Link>
          </div>

          <m.div
            // @ts-ignore
            variants={fadeIn("left", 0.1)}
            viewport={{ once: true, amount: 0.1 }}
            initial="hidden"
            whileInView={"show"}
            className="max-md:mx-auto md:flex-1"
          >
            <Image
              src={"/Pic.svg"}
              alt="about us image"
              width={367}
              height={356}
              className="md:hidden"
            />
            <Image
              src={"/Pic_2.svg"}
              alt="about us image"
              width={653}
              height={634}
              className="hidden md:inline-block md:w-[430px] md:h-[420px] lg:w-[653px] lg:h-[634px]"
            />
          </m.div>
        </div>
      </Wrapper>
    </section>
  );
}

export default AboutUs;
