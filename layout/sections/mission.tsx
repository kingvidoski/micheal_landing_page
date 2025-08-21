"use client";

import Wrapper from "@/components/Wrapper";
import React from "react";
import HeaderText from "../ui/HeaderText";
import { Text } from "../ui/Text";
import { cn } from "@/lib/utils";
import { workSans_400, workSans_500 } from "@/config/font";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { fadeIn } from "@/config/varient";

function Mission() {
  return (
    <section className="py-6 pb-12 lg:pt-14 xl:pt-16">
      <Wrapper>
        <div className="flex flex-row-reverse max-lg:flex-wrap max-md:justify-center items-center max-md:gap-x-10">
          <m.div
            // @ts-ignore
            variants={fadeIn("left", 0.3)}
            viewport={{ once: true, amount: 0.5 }}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col max-md:items-center items-start md:mt-5 md:ml-10 lg:ml-20 lg:mr-auto"
          >
            <HeaderText title="Our Mission" className="md:ml-0" />
            <Text
              as="p"
              className={cn(
                "text-xs text-[#666] leading-5 lg:text-base xl:text-lg lg:leading-7 text-center md:text-left mt-3 max-w-[460px] lg:max-w-[586px] mx-auto",
                workSans_400.className
              )}
            >
              Our mission is to empower small businesses with accurate,
              reliable, and timely bookkeeping solutions, enabling them to make
              informed financial decisions and focus on what they do best. We
              are committed to integrity, clarity, and personalized service in
              every client relationship.
            </Text>

            <div className="mt-10 w-fit mx-auto md:hidden">
              <Image
                src={"/small_mission.svg"}
                alt="mission picture"
                width={258}
                height={291}
              />
            </div>

            <div className="mt-10 flex items-center gap-x-2.5 bg-[#FB9F28] w-fit p-3 px-7 rounded-full">
              <Text
                as="span"
                className={cn(
                  "text-white text-sm lg:text-base",
                  workSans_500.className
                )}
              >
                Learn More
              </Text>
              <Image
                src={"/white_arrow_right.svg"}
                alt="arrow right"
                width={5}
                height={10}
              />
            </div>
          </m.div>

          <m.div
            // @ts-ignore
            variants={fadeIn("up", 0.3)}
            viewport={{ once: true, amount: 0.5 }}
            initial="hidden"
            whileInView={"show"}
            className="mt-10 w-fit max-lg:mx-auto hidden md:inline-block"
          >
            <Image
              src={"/big_mission.svg"}
              alt="mission picture"
              width={399}
              height={451}
              className="md:w-[320px] md:h-[350px] lg:w-[399px] lg:h-[451px]"
            />
          </m.div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Mission;
