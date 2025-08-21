"use client";

import Wrapper from "@/components/Wrapper";
import React, { useRef } from "react";
import HeaderText from "../ui/HeaderText";
import { Text } from "../ui/Text";
import { cn } from "@/lib/utils";
import { workSans_400 } from "@/config/font";
import Image from "next/image";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { fadeIn } from "@/config/varient";
import { motion as m } from "framer-motion";

function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section className="py-6 pb-12 lg:py-20">
      <Wrapper>
        <m.div
          // @ts-ignore
          variants={fadeIn("right", 0.3)}
          viewport={{ once: true, amount: 0.7 }}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="hidden md:inline-block w-28 lg:w-40 h-[2.2px] bg-[#052541]" />
          <HeaderText title="Testimonials" className="md:ml-0 border-none" />
        </m.div>
        <m.div
          // @ts-ignore
          variants={fadeIn("right", 0.4)}
          viewport={{ once: true, amount: 0.7 }}
          initial="hidden"
          whileInView={"show"}
        >
          <Text
            as="p"
            className={cn(
              "text-xs text-[#666] text-center leading-5 lg:text-base xl:text-lg lg:leading-7 md:text-left md:ml-0 mt-3  max-w-[460px] md:max-w-[320px] lg:max-w-[586px] mx-auto",
              workSans_400.className
            )}
          >
            We provide tailored financial solutions designed to simplify your
            books, streamline your processes, and support your business growth —
            one accurate entry at a time.
          </Text>
        </m.div>

        <m.div
          // @ts-ignore
          variants={fadeIn("up", 0.5)}
          viewport={{ once: true, amount: 0.7 }}
          initial="hidden"
          whileInView={"show"}
          className="border-[#F0F0F0] relative h-fit w-full border mt-12 overflow-hidden rounded-[20px] bg-white z-0"
        >
          <div className="ml-auto w-fit">
            <Image
              src={"/testimonial_big.svg"}
              alt="asset"
              width={943}
              height={430}
            />
          </div>

          <div className="hidden md:flex absolute h-full left-0 top-0 w-[20%] items-center justify-center z-50">
            <button
              onClick={scrollLeft}
              className="flex bg-white w-12 h-12 rounded-full items-center justify-center shadow-2xl shadow-black"
            >
              <HiMiniChevronLeft color="#000" size={20} />
            </button>
          </div>

          <div className="hidden md:flex absolute h-full right-0 top-0 w-[20%] items-center justify-center z-50">
            <button
              onClick={scrollRight}
              className="flex bg-white w-12 h-12 rounded-full items-center justify-center shadow-2xl shadow-black"
            >
              <HiMiniChevronRight color="#000" size={20} />
            </button>
          </div>

          <div className="flex items-center justify-center absolute top-0 w-full h-full z-10">
            {/* WHITE FRAME */}
            <div
              ref={scrollRef}
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="overflow-x-auto flex flex-row snap-x snap-mandatory gap-x-10 lg:gap-x-14 transition-all duration-300 max-w-[450px] md:min-h-[180px] xl:max-w-[607px] w-[80%] p-8 lg:p-12 bg-white border-[#A7A7A7] lg:border-[#B1B1B1] border rounded-[15px] lg:rounded-[26px]"
            >
              {[...Array(5)].map((_, i) => {
                return (
                  <div
                    key={i}
                    className="min-w-full md:h-full md:my-auto snap-center"
                  >
                    <Image
                      src={"/quote_comma.svg"}
                      alt="comma"
                      width={15}
                      height={15}
                    />
                    <Text
                      as="p"
                      className={cn(
                        "text-[#1F2C51] text-[10px] md:text-xs md:leading-5 text-center my-2 md:my-3 lg:text-left",
                        workSans_400.className
                      )}
                    >
                      Thanks to this service, I finally understand my numbers.
                      Their reports are clear, timely, and incredibly helpful
                      for planning my next steps.
                    </Text>
                    <div className="ml-auto w-fit">
                      <Image
                        src={"/quote_comma_2.svg"}
                        alt="comma"
                        width={15}
                        height={15}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </m.div>

        <div className="md:hidden flex items-center gap-x-10 mx-auto mt-5 w-fit">
          <button
            onClick={scrollLeft}
            className="flex bg-white w-10 h-10 rounded-full items-center justify-center shadow-2xl shadow-black"
          >
            <HiMiniChevronLeft color="#000" size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="flex bg-white w-10 h-10 rounded-full items-center justify-center shadow-2xl shadow-black"
          >
            <HiMiniChevronRight color="#000" size={20} />
          </button>
        </div>
      </Wrapper>
    </section>
  );
}

export default Testimonials;
