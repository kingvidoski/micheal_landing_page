"use client";

import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import { Text } from "../ui/Text";
import { cn } from "@/lib/utils";
import { workSans_400, workSans_600 } from "@/config/font";
import { useProgress } from "@bprogress/next";
import { motion as m } from "framer-motion";
import { fadeIn } from "@/config/varient";

export interface FormValues {
  email: string;
}

const EmptyFormValues: FormValues = {
  email: "",
};

function NewsLetter({ isContactUs }: { isContactUs?: boolean }) {
  const { start, stop } = useProgress();
  const [formValues, setFormValues] = useState<FormValues>(EmptyFormValues);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  async function handleFormSubmit() {
    try {
      start();
      fetch("/api/", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (!res.ok) throw new Error("Failed to send message");
        setFormValues(EmptyFormValues);
        alert("Message sent successfully");
        return res.json();
      });
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      stop();
    }
  }

  return (
    <m.section
      // @ts-ignore
      variants={fadeIn("up", 0.3)}
      viewport={{ once: true, amount: 0.3 }}
      initial="hidden"
      whileInView={"show"}
      className={cn(
        "py-6 pb-12 md:pt-16 lg:py-28",
        isContactUs && "bg-[#FFF4E6]"
      )}
    >
      <Wrapper>
        <div className="rounded-3xl flex md:justify-between items-center md:items-end max-md:flex-col bg-[#FB9F28] py-10 md:py-16 lg:py-24 md:px-12 lg:px-20 px-3">
          <m.div
            // @ts-ignore
            variants={fadeIn("left", 0.3)}
            viewport={{ once: true, amount: 0.7 }}
            initial="hidden"
            whileInView={"show"}
            className="max-w-[350px] lg:max-w-[450px]"
          >
            <Text
              as="h6"
              className={cn(
                "text-xl md:text-3xl lg:text-[40px] text-white max-md:text-center ",
                workSans_600.className
              )}
            >
              Subscribe Our Newsletter
            </Text>
            <Text
              as="p"
              className={cn(
                "text-white lg:text-base xl:text-xl lg:mt-4 text-sm max-md:text-center mt-2 mx-auto md:ml-0",
                workSans_400.className
              )}
            >
              Stay informed with the latest financial tips, updates, and
              insights delivered straight to your inbox.
            </Text>
          </m.div>

          <m.div
            // @ts-ignore
            variants={fadeIn("right", 0.3)}
            viewport={{ once: true, amount: 0.7 }}
            initial="hidden"
            whileInView={"show"}
            className="mt-10"
          >
            <Text
              as="p"
              className={cn(
                "text-sm text-white max-md:text-center mb-1 max-md:mb-4",
                workSans_400.className
              )}
            >
              Stay up to date
            </Text>
            <div className="flex flex-col md:flex-row gap-3.5 items-center gap-x-4">
              <input
                type="email"
                name="email"
                placeholder="Enter you email..."
                className="placeholder:text-[#666] text-black outline-none text-base max-md:text-center bg-white p-3 rounded-full"
                value={formValues.email}
                onChange={handleInputChange}
              />
              <div
                onClick={handleFormSubmit}
                className="cursor-pointer rounded-full flex justify-center border border-white px-6 py-3 w-[210px] md:w-[120px]"
              >
                <Text
                  as="span"
                  className={cn("text-white text-base", workSans_400.className)}
                >
                  Send
                </Text>
              </div>
            </div>
            <Text
              as="p"
              className={cn(
                "text-sm text-white max-md:text-center mt-4",
                workSans_400.className
              )}
            >
              By subscription you agree to{" "}
              <Text
                as="span"
                className="text-white underline underline-offset-2"
              >
                our policy
              </Text>
            </Text>
          </m.div>
        </div>
      </Wrapper>
    </m.section>
  );
}

export default NewsLetter;
