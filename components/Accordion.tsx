// components/Accordion.jsx
"use client";

import { urbanist_700, workSans_400 } from "@/config/font";
import { Text } from "@/layout/ui/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: string;
  index: number;
}

export const AccordionItem = ({
  title,
  index,
  children,
  isOpen,
  onClick,
}: Props) => {
  return (
    <div className="border-b border-gray-200 overflow-hidden pb-2">
      <div className="flex items-center pl-5 px-2">
        <Text
          as="h2"
          className={cn(
            "flex-1 text-[#1f2c51] text-sm lg:text-lg",
            workSans_400.className
          )}
        >
          {title}
        </Text>
        <button
          onClick={onClick}
          className="flex items-center justify-between p-4"
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${title.replace(/\s/g, "-")}`}
          id={`accordion-header-${title.replace(/\s/g, "-")}`}
        >
          <Image
            src={"/accordion_arrow.svg"}
            alt="accordion arrow"
            width={26}
            height={26}
            className={`h-5 w-5 lg:w-[26px] lg:h-[26px] transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
      <div
        id={`accordion-content-${title.replace(/\s/g, "-")}`}
        role="region"
        aria-labelledby={`accordion-header-${title.replace(/\s/g, "-")}`}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden flex items-start gap-x-2 px-5">
          <div
            className={cn(
              "text-[#3C3C436E] text-base lg:text-lg mt-1",
              urbanist_700.className
            )}
          >
            0{index + 1}
          </div>
          <Text
            as="p"
            className={cn("p-4 pt-0 text-xs lg:text-base text-gray-600")}
          >
            {children}
          </Text>
        </div>
      </div>
    </div>
  );
};
