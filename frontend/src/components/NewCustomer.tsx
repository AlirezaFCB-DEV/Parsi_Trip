"use client";

import { useEffect, useState } from "react";

function NewCustomer() {
  const [screenSizing, setScreenSizing] = useState<boolean>(false);

  useEffect(() => {
    setScreenSizing((prev) => (window.innerWidth >= 1280 ? true : false));

    const HandleResize = () => {
      setScreenSizing((prev) => (window.innerWidth >= 1280 ? true : false));
    };

    window.addEventListener("resize", HandleResize);

    return () => window.removeEventListener("resize", HandleResize);
  }, []);

  return (
    <div className="flex flex-col justify-between items-start xl:items-center w-full p-3 bg-white">
      <h1 className="text-xl font-bold mb-5">
        {screenSizing
          ? "See personalized recommendations"
          : "sign in for best experience"}
      </h1>

      <button className="w-full xl:w-90 h-12 xl:h-8 bg-amber-400 xl:text-sm rounded-full">
        {screenSizing ? "Sign in" : "sign in securely"}
      </button>

      <div className="flex justify-between items-end">
        <p className="mr-1 hidden xl:block">New Customer?</p>

        <span className="border-b border-blue-600 text-blue-600 mt-4">
          {screenSizing ? "Start here" : "create an account"}
        </span>
      </div>
    </div>
  );
}

export default NewCustomer;
