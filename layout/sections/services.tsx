"use client";

import Wrapper from "@/components/Wrapper";
import React from "react";
import HeaderText from "../ui/HeaderText";
import { Text } from "../ui/Text";
import { workSans_400, workSans_500 } from "@/config/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { fadeIn } from "@/config/varient";

const data = [
  {
    title: "Finanacial information",
    desc: "systematically tracking, categorizing, and storing financial data—such as income, expenses, invoices, receipts, and bank records.",
    icon: "/financeIcon.svg",
  },
  {
    title: "Balance sheet",
    desc: "Get a clear snapshot of your business's financial health — assets, liabilities, and equity, all accurately recorded and organized.",
    icon: "/balanceSheet.svg",
  },
  {
    title: "Profit & loss statement",
    desc: "Get a clear snapshot of your business's financial health — assets, liabilities, and equity, all accurately recorded and organized.",
    icon: "/profitIcon.svg",
  },
  {
    title: "Market Analysis",
    desc: "Track your income and expenses with clarity — see how your business is performing and make smarter financial decisions.",
    icon: "/marketIcon.svg",
  },
];

function Services() {
  return (
    <section id="services" className="py-6 pb-12 lg:pt-20">
      <Wrapper>
        <m.div
          // @ts-ignore
          variants={fadeIn("up", 0.3)}
          viewport={{ once: true, amount: 0.7 }}
          initial="hidden"
          whileInView={"show"}
        >
          <HeaderText title="Our Services" />
        </m.div>
        <m.div
          // @ts-ignore
          variants={fadeIn("up", 0.4)}
          viewport={{ once: true, amount: 0.7 }}
          initial="hidden"
          whileInView={"show"}
        >
          <Text
            as="p"
            className={cn(
              "text-xs text-[#666] text-center mt-3 leading-5 lg:text-base xl:text-lg lg:leading-7 max-w-[460px] lg:max-w-[586px] mx-auto",
              workSans_400.className
            )}
          >
            We provide tailored financial solutions designed to simplify your
            books, streamline your processes, and support your business growth —
            one accurate entry at a time.
          </Text>
        </m.div>

        <div className="flex flex-wrap gap-5 gap-y-7 mt-16 mx-auto max-w-[800px] justify-center">
          {data.map((item, index) => {
            return (
              <m.div
                // @ts-ignore
                variants={fadeIn("up", index * 0.2)}
                viewport={{ once: true, amount: 0.7 }}
                initial="hidden"
                whileInView={"show"}
                key={index}
                className="w-full sm:w-[365px] h-[264px] rounded-lg flex flex-col items-center hover:bg-white hover:shadow-xl border border-[#f0f0f0] hover:border-none bg-[#FAFAFA] p-10 pt-12"
              >
                <Image
                  src={item.icon}
                  width={50}
                  height={50}
                  alt={item.title}
                />
                <Text
                  as="h6"
                  className={cn(
                    "text-lg text-[#2c3847] my-2 mt-4",
                    workSans_500.className
                  )}
                >
                  {item.title}
                </Text>
                <Text
                  as="p"
                  className={cn(
                    "text-xs text-[#666] text-center leading-5",
                    workSans_400.className
                  )}
                >
                  {item.desc}
                </Text>
              </m.div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}

export default Services;
