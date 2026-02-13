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
    <footer className="w-full">
      <section
        className={`w-full p-2 bg-gray-700 text-sm flex flex-col justify-center items-center`}
      >
        <div className={`${screenSize ? "flex" : "hidden"}`}>
          <ArrowDropUpIcon />
        </div>

        <Link href="#topItem">
          {screenSize ? "TOP OF PAGE" : "back to top"}
        </Link>
      </section>

      <section className="w-full grid grid-cols-2 text-white bg-gray-800">
        <div className="col-span-1 p-5">
          <p className="pb-4">Your Orders</p>
          <p className="pb-4">Your Lists</p>
          <p className="pb-4">Gift Cards</p>
          <p className="pb-4">Find a Gift</p>
          <p className="pb-4">Browsing History</p>
          <p className="pb-3">Your Returns</p>
        </div>

        <div className="col-span-1 p-5">
          <p className="pb-4">Amazon Fresh</p>
          <p className="pb-4">Amazon Live</p>
          <p className="pb-4">Registery & Gift List</p>
          <p className="pb-4">Your Account</p>
          <p className="pb-4">Sell products on Amazon</p>
          <p className="pb-4">Recalls and Product Safety Alert</p>
          <p className="pb-3">Customer Service</p>
        </div>
      </section>
    </footer>
  );
}

export default HomePageFooter;
