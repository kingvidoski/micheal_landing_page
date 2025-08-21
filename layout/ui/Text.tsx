import React from "react";
import { cn } from "@/lib/utils";

type TextTag = "p" | "h4" | "h5" | "h6" | "h2" | "span";
type StyleTag = "xs" | "sm" | "md" | "lg" | "xl" | "title" | "subTitle";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextTag;
  styleTag?: StyleTag;
  className?: string;
  children: React.ReactNode;
}

const baseTagStyles: Record<TextTag, string> = {
  p: "text-base text-black font-normal",
  h4: "text-xl font-semibold text-gray-900",
  h5: "text-lg font-semibold text-gray-900",
  h6: "text-lg font-semibold text-gray-900",
  h2: "",
  span: "text-sm text-black font-normal",
};

const styleTagStyles: Record<StyleTag, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg font-medium",
  xl: "text-xl font-semibold",
  title: "text-2xl font-bold",
  subTitle: "text-base md:text-lg lg:text-xl text-black",
};

export const Text = ({
  as = "p",
  styleTag,
  className,
  children,
  ...rest
}: TextProps) => {
  const Component = as;
  const combinedStyles = cn(
    baseTagStyles[as],
    styleTag ? styleTagStyles[styleTag] : null,
    className
  );

  return (
    <Component className={combinedStyles} {...rest}>
      {children}
    </Component>
  );
};
