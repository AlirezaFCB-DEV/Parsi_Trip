"use client";

import Link from "next/link";

// =============== Material IU Icons ===============

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Fragment, useEffect, useState } from "react";

function HomePageFooter() {
  const [screenSize, setScreenSize] = useState<boolean>(false);

  useEffect(() => {
    setScreenSize((prev) => {
      return window.innerWidth <= 1024 ? true : false;
    });

    const HandleScreenSize = () => {
      setScreenSize((prev) => {
        return window.innerWidth <= 1024 ? true : false;
      });
    };

    window.addEventListener("resize", HandleScreenSize);

    return () => window.removeEventListener("resize", HandleScreenSize);
  }, []);

  return (
    <section
      className={`w-full p-2 bg-gray-700 text-sm flex flex-col justify-center items-center`}
    >
      <div className={`${screenSize ? "flex" : "hidden"}`}>
        <ArrowDropUpIcon />
      </div>

      <Link href="#topItem">{screenSize ? "TOP OF PAGE" : "back to top"}</Link>
    </section>
  );
}

export default HomePageFooter;
