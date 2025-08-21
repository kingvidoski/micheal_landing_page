import React from "react";
import { cn } from "@/lib/utils";
import { nunito_400, workSans_300, workSans_500 } from "@/config/font";

interface BaseProps {
  label: string;
  containerClassName?: string;
  placeholder?: string;
}

// Props for the input variant
interface InputProps
  extends BaseProps,
    React.ComponentPropsWithoutRef<"input"> {
  as?: "input";
}

// Props for the textarea variant
interface TextareaProps
  extends BaseProps,
    React.ComponentPropsWithoutRef<"textarea"> {
  as: "textarea";
}

type Props = InputProps | TextareaProps;

function InputField({
  label,
  containerClassName,
  as = "input",
  ...props
}: Props) {
  // Common Tailwind classes for both input and textarea elements
  const commonClasses = cn(
    "border border-[#CACED8] w-full placeholder:text-[#CACED8] text-[15px] text-[#052541] rounded-lg p-4 mt-2 focus:outline-[#052541] focus:outline outline-0 shadow"
  );

  return (
    <div
      className={cn(
        "flex flex-col gap-x-2 font-[sans-serif]",
        containerClassName
      )}
    >
      <label className={cn("text-base text-[#083a50]", workSans_500.className)}>
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          className={cn(
            "h-40 rounded-[10px] resize-y",
            commonClasses,
            "text-black placeholder:text-black text-sm",
            workSans_300.className
          )}
          {...(props as React.ComponentPropsWithoutRef<"textarea">)}
        />
      ) : (
        <input
          type="text"
          className={cn("h-[40px]", commonClasses, nunito_400.className)}
          {...(props as React.ComponentPropsWithoutRef<"input">)}
        />
      )}
    </div>
  );
}

export default InputField;
