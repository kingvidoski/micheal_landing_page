"use client";

import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "./nav";
import useToggle from "@/hook/useToggle";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavBarItem } from "@/components/NavLinks";
import { motion as m } from "framer-motion";
import { Text } from "../ui/Text";
import { workSans_400 } from "@/config/font";
import Link from "next/link";

function index() {
  const [isMenuPressed, setMenuPressed] = useToggle();
  const [lastScroll, setLastScroll] = useState(0);
  const [scrollClass, setScrollClass] = useState("");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest);
    const currentScroll = latest;

    if (currentScroll <= 0) {
      setScrollClass("");
    }

    if (currentScroll > lastScroll && scrollClass !== "scroll-down") {
      setScrollClass("scroll-down");
    }

    if (currentScroll < lastScroll && scrollClass === "scroll-down") {
      setScrollClass("scroll-up");
    }
    setLastScroll(currentScroll);
  });

  useEffect(() => {
    if (isMenuPressed) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMenuPressed]);

  return (
    <>
      {isMenuPressed && (
        <div
          onClick={setMenuPressed}
          className="w-full h-full absolute left-0 right-0 top-0 bottom-0 z-[15] bg-gray-900/75 dark:bg-gray-600/75"
        />
      )}
      <header className="relative w-full bg-white h-[120px] md:h-[120px] lg:h-[150px] pt-3">
        {isMenuPressed && (
          <div
            onClick={setMenuPressed}
            className="w-full h-full absolute left-0 right-0 top-0 bottom-0 z-[0] bg-gray-900/75 dark:bg-gray-600/75"
          />
        )}
        <Wrapper>
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <m.div
                initial={{
                  x: -200,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="flex justify-center relative"
              >
                <Image
                  src={"/Logo.svg"}
                  alt="logo"
                  width={171}
                  height={60}
                  className="hidden lg:inline-block"
                />
                <Image
                  src={"/smallLogo.svg"}
                  alt="logo"
                  width={147}
                  height={57}
                  className="inline-block lg:hidden"
                />
              </m.div>
            </Link>

            <div className="flex flex-row">
              <Navbar
                className="flex-1 justify-center"
                active={isMenuPressed}
                handleNav={setMenuPressed}
              />
            </div>

            <Link
              href={"mailto:michaela@maaccounting.ca"}
              className="hidden lg:inline-block"
            >
              <m.div
                initial={{
                  x: 100,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="w-[130px] hidden lg:inline-block"
              >
                <m.div
                  initial={{ width: "50px" }}
                  whileHover={{ width: "120px" }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="bg-[#FB9F28] min-w-[50px] cursor-pointer group flex items-center gap-x-3 p-3 rounded-full"
                >
                  <Image
                    src={"/emailIcon.svg"}
                    alt="Email Icon"
                    width={25}
                    height={20}
                  />
                  <Text
                    as="span"
                    className={cn(
                      "text-xs underline underline-offset-2 text-white hidden group-hover:inline h-[18px] overflow-hidden",
                      workSans_400.className
                    )}
                  >
                    Email Us
                  </Text>
                </m.div>
              </m.div>
            </Link>
          </div>
        </Wrapper>
      </header>
    </>
  );
}

export default index;
