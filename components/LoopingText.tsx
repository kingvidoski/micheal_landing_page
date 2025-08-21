// components/LoopingText.jsx
"use client";

import { workSans_700 } from "@/config/font";
import { Text } from "@/layout/ui/Text";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Clarity", "Trust", "Saving"];

export const LoopingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  const variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };

  return (
    <Text
      as="h2"
      className={cn(
        "text-[#052541] text-2xl md:text-4xl md:leading-12 lg:text-[42px] lg:leading-14 xl:text-5xl max-md:text-center",
        workSans_700.className
      )}
    >
      Empowering Small Businesses with&nbsp;
      <div
        className={cn(
          "relative h-8 md:pb-4 md:h-10 lg:h-14 overflow-hidden align-top md:text-left text-[#fb9f28]"
        )}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex items-center md:justify-start justify-center"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </Text>
  );
};
