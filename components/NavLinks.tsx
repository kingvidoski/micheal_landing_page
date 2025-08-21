"use client";

import { workSans_400, workSans_700 } from "@/config/font";
import { Text } from "@/layout/ui/Text";
import {
  LegacyAnimationControls,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLinks {
  title: { name: string; href: string };
  classProps: string;
  textclassProps?: string;
  linkAnimation: string;
  initial?: boolean | TargetAndTransition | VariantLabels | undefined;
  animate?:
    | boolean
    | TargetAndTransition
    | VariantLabels
    | LegacyAnimationControls
    | undefined;
  index: number;
  handleNav?: () => void;
  isSmallScreen?: boolean;
}

export const NavBarItem = ({
  title,
  index,
  initial,
  animate,
  classProps,
  linkAnimation,
  isSmallScreen,
  textclassProps,
  handleNav,
}: NavLinks) => {
  //Variables
  const ref = useRef<HTMLLIElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  //This function adds an active to the nav li element when clicked
  function handleActive() {
    // ref?.current?.classList.add(activeClass);
    if (handleNav) handleNav();
  }

  return (
    <Link href={title.href}>
      <m.li
        ref={ref}
        className={classProps}
        id={title.name}
        onClick={() => handleActive()}
        initial={initial}
        animate={animate}
        transition={{
          duration: 1.2,
          delay: index * 0.25,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Text
          as="span"
          styleTag="md"
          className={cn(
            linkAnimation,
            "text-sm lg:text-base text-[#8E8E93] hover:text-[#052541] transition-colors duration-300 ease-in-out",
            isSmallScreen &&
              "group-hover:font-semibold group-hover:text-[#052541] group-hover:scale-[1.09]",
            isHovered ? workSans_700.className : workSans_400.className,
            textclassProps
          )}
        >
          {title.name}
        </Text>
      </m.li>
    </Link>
  );
};
