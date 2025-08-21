"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useHash = () => {
  const [hash, setHash] = useState("");
  const path = usePathname();

  console.log(hash, "here...");

  useEffect(() => {
    // This function runs on the client-side only
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    // Set the initial hash on component mount
    handleHashChange();

    // Listen for hash changes in the URL
    window.addEventListener("hashchange", handleHashChange);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // The empty dependency array ensures this runs only once

  return hash;
};
