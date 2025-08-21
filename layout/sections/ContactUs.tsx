"use client";

import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Text } from "../ui/Text";
import { workSans_400, workSans_500, workSans_700 } from "@/config/font";
import { cn } from "@/lib/utils";
import InputField from "../ui/InputField";
import { useProgress } from "@bprogress/next";
import { motion as m } from "framer-motion";
import { fadeIn } from "@/config/varient";
import Link from "next/link";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  message: string;
}

const EmptyFormValues: FormValues = {
  email: "",
  firstName: "",
  message: "",
  lastName: "",
  country: "",
};

function ContactUs() {
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
    <section className="py-6 pb-12 lg:py-20">
      <Wrapper>
        <div className="bg-[#FB9F28] py-20 items-center justify-center flex flex-col rounded-[15px] lg:rounded-[25px] relative">
          <div className="absolute bottom-0 left-0 z-10 w-fit h-fit">
            <Image
              src={"/round_lines.svg"}
              alt="lines"
              width={216}
              height={216}
              className="w-[100px] h-[100px]"
            />
          </div>
          <div className="absolute top-0 right-0 rotate-180 z-10 w-fit h-fit">
            <Image
              src={"/round_lines.svg"}
              alt="lines"
              width={216}
              height={216}
              className="w-[100px] h-[100px]"
            />
          </div>

          <m.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
            }}
            className="bg-white rounded-[10px] lg:rounded-[15px] w-fit px-6 py-2 mb-3"
          >
            <Text
              className={cn(
                "text-[#FB9F28] text-xs mdLtext-sm lg:text-base",
                workSans_500.className
              )}
            >
              Write to Us
            </Text>
          </m.div>
          <m.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <Text
              className={cn(
                "text-white text-xl text-center md:text-[25px] lg:text-[35px]",
                workSans_700.className
              )}
            >
              Get in Touch With Us
            </Text>
          </m.div>
        </div>

        <div className="mt-12">
          {/* FORM */}
          <div>
            <m.div
              initial={{
                x: -150,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Text
                as="h6"
                className={cn(
                  "text-[#1f2c51] text-xl lg:text-[35px]",
                  workSans_500.className
                )}
              >
                Let's Talk
              </Text>
            </m.div>
            <m.div
              initial={{
                x: -250,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Text
                className={cn(
                  "text-[#666] text-xs leading-6 w-fit lg:text-base xl:text-lg xl:leading-7 border-b border-[#B1B1B1] pb-3.5 mt-1 mb-3",
                  workSans_400.className
                )}
              >
                Get in touch with is using the enquiry
                <br /> form or contact details below
              </Text>
            </m.div>

            <div className="flex items-start xl:justify-between gap-x-10">
              <m.div
                // @ts-ignore
                variants={fadeIn("up", 0.3)}
                viewport={{ once: true, amount: 0.3 }}
                initial="hidden"
                whileInView={"show"}
                className="w-full max-w-[517px]"
              >
                <Text
                  className={cn(
                    "text-base text-[#CACED8] mt-10",
                    workSans_700.className
                  )}
                >
                  Personal
                </Text>

                <div className="mt-5">
                  <div className="space-y-5 flex flex-col sm:flex-row sm:gap-x-5">
                    <InputField
                      label="First Name"
                      name="firstName"
                      placeholder="mobina"
                      containerClassName="flex-1"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Last Name"
                      name="lastName"
                      placeholder="anita"
                      containerClassName="flex-1"
                      value={formValues.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-5 mt-5 flex flex-col sm:flex-row sm:gap-x-5">
                    <InputField
                      label="Email"
                      placeholder="email@gmail.com"
                      type="email"
                      name="email"
                      containerClassName="flex-1"
                      value={formValues.email}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Country"
                      name="country"
                      placeholder="USA"
                      containerClassName="flex-1"
                      value={formValues.country}
                      onChange={handleInputChange}
                    />
                  </div>
                  <InputField
                    as="textarea"
                    label="Message"
                    name="message"
                    placeholder="Write your message...."
                    containerClassName="flex-1 mt-5"
                    value={formValues.message}
                    onChange={handleInputChange}
                  />

                  <div
                    onClick={handleFormSubmit}
                    className="flex items-center justify-center mx-auto mt-14 bg-[#FB9F28] w-full p-3 px-7 rounded-full"
                  >
                    <Text
                      as="span"
                      className={cn(
                        "text-white text-sm cursor-pointer lg:text-base text-center",
                        workSans_500.className
                      )}
                    >
                      Send
                    </Text>
                  </div>
                </div>
              </m.div>

              <div className="hidden lg:inline-block mt-16 max-w-[517px]">
                <m.div
                  // @ts-ignore
                  variants={fadeIn("left", 0.1)}
                  viewport={{ once: true, amount: 0.2 }}
                  initial="hidden"
                  whileInView={"show"}
                  className="w-[421px] h-[324px] overflow-hidden rounded-[20px]"
                >
                  <Image
                    src={"/contact.jpg"}
                    alt="contact picture"
                    width={421}
                    height={324}
                    className="object-center h-[324px] object-cover"
                  />
                </m.div>

                <m.div
                  // @ts-ignore
                  variants={fadeIn("left", 0.5)}
                  viewport={{ once: true, amount: 0.7 }}
                  initial="hidden"
                  whileInView={"show"}
                  className="mt-10 ml-2 space-y-8"
                >
                  <Link href={"mailto:michaela@maaccounting.ca"}>
                    <div className="flex items-center gap-x-5">
                      <Image
                        src={"/email.svg"}
                        alt="email icon"
                        width={32}
                        height={32}
                      />
                      <Text
                        className={cn(
                          "text-sm text-[#1f2c51] underline underline-offset-2",
                          workSans_400.className
                        )}
                      >
                        michaela@maaccounting.ca
                      </Text>
                    </div>
                  </Link>
                  <div className="flex items-center gap-x-5">
                    <Image
                      src={"/phone.svg"}
                      alt="phone icon"
                      width={32}
                      height={32}
                    />
                    <Text
                      className={cn(
                        "text-sm text-[#1f2c51] underline underline-offset-4",
                        workSans_400.className
                      )}
                    >
                      226-246-3965
                    </Text>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <Image
                      src={"/location.svg"}
                      alt="location icon"
                      width={32}
                      height={32}
                    />
                    <Text
                      className={cn(
                        "text-sm text-[#1f2c51]",
                        workSans_400.className
                      )}
                    >
                      123 Market St. #22B
                      <br />
                      Charlottesville, California 44635
                    </Text>
                  </div>
                </m.div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default ContactUs;
