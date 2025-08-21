"use client";

import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";
import { Text } from "../ui/Text";
import { cn } from "@/lib/utils";
import { poppins_400 } from "@/config/font";
import Link from "next/link";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const renderLinks = () => {
    return (
      <div className="flex items-start justify-between min-w-[195px] lg:w-[280px]">
        <div className="space-y-4">
          <div>
            <Link href={"/"}>
              <Text
                as="p"
                className={cn("text-xs text-white", poppins_400.className)}
              >
                Home
              </Text>
            </Link>
          </div>

          <div>
            <Link href={"/About_Us"}>
              <Text
                as="p"
                className={cn("text-xs text-white", poppins_400.className)}
              >
                About us
              </Text>
            </Link>
          </div>

          <div>
            <Link href={"#services"}>
              <Text
                as="p"
                className={cn("text-xs text-white", poppins_400.className)}
              >
                Service
              </Text>
            </Link>
          </div>

          <div>
            <Link href={"/Contact_Us"}>
              <Text
                as="p"
                className={cn("text-xs text-white", poppins_400.className)}
              >
                Contact Us
              </Text>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <Link
              href={"https://www.facebook.com/share/r/1VhASouC1n/"}
              target="_blank"
            >
              <Text
                as="p"
                className={cn("text-xs text-white", poppins_400.className)}
              >
                Facebook
              </Text>
            </Link>
          </div>
          <Text
            as="p"
            className={cn("text-xs text-white", poppins_400.className)}
          >
            Twitter
          </Text>
          <div>
            <Link
              href={
                "https://www.linkedin.com/in/michael-alagbe-847595140?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              }
              target="_blank"
            >
              <Text
                as="p"
                className={cn("text-xs text-white", poppins_400.className)}
              >
                LinkedIn
              </Text>
            </Link>
          </div>
          <Text
            as="p"
            className={cn("text-xs text-white", poppins_400.className)}
          >
            Instagram
          </Text>
        </div>
      </div>
    );
  };

  return (
    <footer className="py-6 pb-12 lg:pt-20 bg-[#FB9F28]">
      <Wrapper>
        <div className="flex items-start justify-between">
          <div>
            <div>
              <Link href={"/"}>
                <Image
                  src={"/footer_logo_small.svg"}
                  alt="logo"
                  width={147}
                  height={57}
                  className="md:hidden"
                />
                <Image
                  src={"/footer_logo_big.svg"}
                  alt="logo"
                  width={319}
                  height={124}
                  className="hidden md:inline-block"
                />
              </Link>
            </div>
            <div className="md:hidden w-[200px] my-8 ml-1">{renderLinks()}</div>
            <div className="mt-3 ml-1 space-y-3">
              <Text
                as="p"
                className={cn(
                  "text-white text-sm underline underline-offset-4",
                  poppins_400.className
                )}
              >
                226-246-3965
              </Text>
              <div>
                <Link href={"mailto:michaela@maaccounting.ca"}>
                  <Text
                    as="p"
                    className={cn(
                      "text-white text-sm underline underline-offset-2",
                      poppins_400.className
                    )}
                  >
                    michaela@maaccounting.ca
                  </Text>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-x-28">
            <div className="hidden md:inline-block">{renderLinks()}</div>

            <div onClick={scrollToTop} className="cursor-pointer">
              <Image
                src={"/up_arrow.svg"}
                alt="up arrow"
                width={52}
                height={52}
                className="lg:w-[52px] lg:h-[52px] w-[39px] h-[39px]"
              />
            </div>
          </div>
        </div>
        <Text
          as="p"
          className={cn(
            "text-white opacity-80 text-xs text-center hidden md:block mt-10 -mb-5",
            poppins_400.className
          )}
        >
          © 2020 Lift Media. All rights reserved.
        </Text>
      </Wrapper>
    </footer>
  );
}

export default Footer;
