"use client";

import Image from "next/image";
import React from "react";
import { Text } from "../ui/Text";
import { cn } from "@/lib/utils";
import { poppins_300, poppins_400, workSans_700 } from "@/config/font";
import { LoopingText } from "@/components/LoopingText";
import { motion as m } from "framer-motion";
import Link from "next/link";

function Hero() {
  return (
    <main className="xl:py-16 py-6 pb-10">
      <div className="flex flex-col-reverse md:flex-row md:items-center max-w-[1440px] min-w-[320px] mx-auto md:px-12 lg:px-20 max-md:mt-10 lg:-mt-14">
        <div className="flex flex-col items-center md:items-start px-6 md:flex-1">
          <m.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            className="bg-[#FDD3B74D] rounded-full px-3 pb-[5px]"
          >
            <Text
              as="span"
              className={cn(
                "text-[#844d05] text-[8px] md:text-xs xl:text-sm",
                poppins_400.className
              )}
            >
              Financial Consultant
            </Text>
          </m.div>

          <m.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 1.4,
            }}
            className="mt-3 max-w-[278px] md:max-w-[350px] lg:max-w-[597px]"
          >
            <LoopingText />
          </m.div>
          <m.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 1.6,
            }}
          >
            <Text
              as="p"
              className={cn(
                "text-[#666] max-w-[318px] lg:max-w-[497px] mt-3 text-[10px] leading-5 md:text-xs md:leading-6 md:mt-4 lg:mt-6 lg:text-base lg:leading-8 xl:text-lg max-md:text-center",
                poppins_300.className
              )}
            >
              Take charge of your business finances with accurate, timely, and
              reliable bookkeeping so you can focus on growth while we handle
              the numbers.
            </Text>
          </m.div>

          <Link href={"/Contact_Us"}>
            <m.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 2,
              }}
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
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 1,
          }}
          className="max-md:mx-auto md:flex-1"
        >
          <Image
            src={"/hero_small.svg"}
            alt="hero image"
            width={367}
            height={356}
            className="md:hidden"
          />
          <Image
            src={"/hero_big.svg"}
            alt="hero image"
            width={653}
            height={634}
            className="hidden md:inline-block md:w-[430px] md:h-[420px] lg:w-[653px] lg:h-[634px]"
          />
        </m.div>
      </div>
    </main>
  );
}

export default Hero;
