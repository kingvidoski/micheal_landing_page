import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Wrapper({ children, className }: Props) {
  return (
    <div
      className={cn(
        "w-full max-w-[1440px] min-w-[320px] pl-6 pt-[17px] pr-[18px] pb-5 sm:px-8 md:px-12 lg:px-20 xl:px-[100px] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Wrapper;
