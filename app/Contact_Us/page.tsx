import ContactUs from "@/layout/sections/ContactUs";
import NewsLetter from "@/layout/sections/newsLetter";
import React from "react";

function page() {
  return (
    <>
      <ContactUs />
      <NewsLetter isContactUs />
    </>
  );
}

export default page;
