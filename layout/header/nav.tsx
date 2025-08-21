"use client";

import { NavBarItem } from "@/components/NavLinks";
import React from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { motion as m } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Text } from "../ui/Text";
import { workSans_400, workSans_700 } from "@/config/font";
import { usePathname } from "next/navigation";
import { useHash } from "@/hook/useHash";
import Link from "next/link";

interface Props {
  active: boolean;
  handleNav: () => boolean;
  className: string;
}

function nav({ className, active, handleNav }: Props) {
  const navList = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About_Us" },
    { name: "Services", href: "/#services" },
    { name: "Contact Us", href: "/Contact_Us" },
  ];
  const pathname = usePathname();
  const hash = useHash();

  return (
    <nav className={cn(className)}>
      <>
        {/* Navigation for small screen size */}
        <m.nav
          initial={{
            x: 200,
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
          className="md:hidden"
        >
          {/* This shows nav list when activate/pressed or return the menu icon by default */}
          {!active ? (
            <button
              className="hover:scale-[1.1] w-[28px] h-[28px] flex items-center justify-center"
              onClick={handleNav}
            >
              <Image
                src={"/jam_menu.svg"}
                alt="Hamburger Menu"
                width={24}
                height={24}
              />
            </button>
          ) : (
            <m.div
              initial={{
                x: -200,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="w-[180px] h-[300px] flex flex-col bg-white rounded-br-xl absolute z-[60] left-0 top-0 px-4 py-8 pt-6"
            >
              <div className="flex items-center justify-between">
                <Image src={"halfLogo.svg"} alt="logo" width={36} height={36} />
                <button
                  className="hover:scale-[1.1] w-[24px] h-[24px]"
                  onClick={handleNav}
                >
                  <Image
                    src={"/closeIcon.svg"}
                    alt="Close Icon"
                    width={24}
                    height={24}
                  />
                </button>
              </div>

              <ul className="mt-4">
                {navList.map((item, index) => {
                  return (
                    <NavBarItem
                      key={item.name + index}
                      title={item}
                      classProps={cn(
                        "cursor-pointer group text-xs font-medium text-grey_900 space-y-6 p-2 hover:scale-[1.09] hover:shadow transition duration-200 ease-in-out"
                      )}
                      textclassProps={cn(
                        ((pathname === item.href && hash === "") ||
                          (item.href.startsWith("#") && hash === item.href)) &&
                          `${workSans_700.className} text-[#052541]`
                      )}
                      linkAnimation=""
                      index={index}
                      handleNav={handleNav}
                      isSmallScreen
                    />
                  );
                })}

                <li className="mt-3">
                  <Link href={"mailto:michaela@maaccounting.ca"}>
                    <div className="bg-[#FB9F28] w-[120px] cursor-pointer group flex items-center gap-x-2 p-3 pl-1.5 py-1.5 rounded-full">
                      <Image
                        src={"/emailIcon.svg"}
                        alt="Email Icon"
                        width={14}
                        height={11}
                      />
                      <Text
                        as="span"
                        className={cn(
                          "text-[8px] underline underline-offset-1 mb-[2px] text-white",
                          workSans_400.className
                        )}
                      >
                        Email Us
                      </Text>
                    </div>
                  </Link>
                </li>
              </ul>
            </m.div>
          )}
        </m.nav>

        {/* Desktop View */}
        <nav className="hidden md:inline">
          <ul className="flex justify-between items-center space-x-8 lg:space-x-16">
            {navList.map((item, index) => {
              return (
                <NavBarItem
                  key={item.name + index}
                  title={item}
                  classProps={cn("navlink cursor-pointer")}
                  textclassProps={cn(
                    ((pathname === item.href && hash === "") ||
                      (item.href.startsWith("#") && hash === item.href)) &&
                      `${workSans_700.className} text-[#052541]`
                  )}
                  linkAnimation="link-underline link-underline-black py-1"
                  index={index}
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                />
              );
            })}
          </ul>
        </nav>
      </>
    </nav>
  );
}

export default nav;
