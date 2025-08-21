import React from "react";
import { Text } from "./Text";
import { cn } from "@/lib/utils";
import { workSans_700 } from "@/config/font";

interface Props {
  title: string;
  className?: string;
}

function HeaderText({ title, className }: Props) {
  return (
    <div
      className={cn(
        "w-fit mx-auto border-t pt-1 border-[#052541] lg:border-t-[3px] lg:mr-auto",
        className
      )}
    >
      <Text
        as="h6"
        className={cn(
          "text-center text-xl md:text-3xl lg:text-[40px]",
          workSans_700.className
        )}
      >
        {title}
      </Text>
    </div>
  );
}

export default HeaderText;
