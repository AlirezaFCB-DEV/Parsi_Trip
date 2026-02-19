"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// =============== Material IU Icons ===============

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LanguageIcon from "@mui/icons-material/Language";
import useHomePageFooter from "@/services/Home-page-footer/hook";
import { IoptionItemsValues } from "@/services/Home-page-footer/types";

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

  const { data } = useHomePageFooter();

  return (
    <footer className="w-full text-white">
      <section
        className={`w-full p-4 bg-gray-700 text-[12px] flex flex-col justify-center items-center`}
      >
        <div className={`${screenSize ? "flex" : "hidden"}`}>
          <ArrowDropUpIcon />
        </div>

        <Link href="#topItem">
          {screenSize ? "TOP OF PAGE" : "back to top"}
        </Link>
      </section>

      <section className="w-full grid grid-cols-2 lg:grid-cols-4 mx-auto py-5 bg-gray-800">
        <div className="col-span-1 p-5">
          {data?.[0].itemOne.map((item: IoptionItemsValues) => (
            <div key={item.id}>
              <h2 className={`text-sm font-bold mb-3`}>
                {screenSize ? null : item.headerTitle}
              </h2>
              <p className="text-[12px] text-white/80">
                {screenSize ? item.mobileTitle : item.desktopTitle}
              </p>
            </div>
          ))}
        </div>

        <div className="col-span-1 p-5">
          {data?.[0].itemTwo.map((item: IoptionItemsValues) => (
            <div key={item.id}>
              <h2 className="text-sm font-bold mb-3">
                {screenSize ? null : item.headerTitle}
              </h2>
              <p className="text-[12px] text-white/80">
                {screenSize ? item.mobileTitle : item.desktopTitle}
              </p>
            </div>
          ))}
        </div>

        <div className={`p-5 ${screenSize ? "hidden" : "col-span-1"}`}>
          {data?.[0].itemThree.map((item: IoptionItemsValues) => (
            <div key={item.id}>
              <h2 className="text-sm font-bold mb-3">
                {screenSize ? null : item.headerTitle}
              </h2>
              <p className="text-[12px] text-white/80">
                {screenSize ? item.mobileTitle : item.desktopTitle}
              </p>
            </div>
          ))}
        </div>

        <div className={`p-5 ${screenSize ? "hidden" : "col-span-1"}`}>
          {data?.[0].itemFour.map((item: IoptionItemsValues) => (
            <div key={item.id}>
              <h2 className="text-sm font-bold mb-3">
                {screenSize ? null : item.headerTitle}
              </h2>
              <p className="text-[12px] text-white/80">
                {screenSize ? item.mobileTitle : item.desktopTitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col justify-between items-center bg-gray-950/70">
        <div className="w-55 my-15 flex justify-between items-center">
          <div className="flex justify-between items-center text-sm">
            <LanguageIcon fontSize="small" className="mr-2" />

            <p>English</p>
          </div>

          <div className="flex justify-between items-center text-sm">
            <LanguageIcon fontSize="small" className="mr-2" />

            <p>United States</p>
          </div>
        </div>

        <p className="mb-5">
          Already a customer?<span> Sign in</span>
        </p>

        <div className="flex flex-col justify-between items-center text-[10px] text-white/70">
          <div className="flex justify-between items-center gap-5">
            <p>Conditions of Use</p>

            <p>Privacy Notice</p>
          </div>

          <div className="flex justify-between items-center gap-5">
            <p>Consumer Health Data Privacy Disclosure</p>

            <p>Your Ads Privacy Choices</p>
          </div>
        </div>

        <p className="text-white/80 mt-5 mb-15 text-center text-[10px]">
          © 1996-2026, Amazon.com, Inc. or its affiliates
        </p>
      </section>
    </footer>
  );
}

export default HomePageFooter;
