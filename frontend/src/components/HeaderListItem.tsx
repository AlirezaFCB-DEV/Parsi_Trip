"use client";

import useListItems from "@/services/Header/Header-list-items/hook";
import { IlistItems } from "@/services/Header/Header-list-items/types";
import { useEffect, useState } from "react";

// =============== Material UI Icons ===============

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DesktopAllMenu from "./DesktopAllMenu";

function HeaderListitems() {
  const { data } = useListItems();
  const [isOpenList, setIsOpenList] = useState<boolean>(false);

  let [screenIsBig, setScreenIsBig] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      setScreenIsBig(window.innerWidth >= 1280);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => removeEventListener("resize", checkScreen);
  }, []);

  const HandleIsOpenList = () => {
    setIsOpenList((prev) => !prev);
  };

  if (screenIsBig == null) return null;

  return (
    <div className="w-full flex justify-start items-center overflow-x-auto scrollbar-hide">
      <ul className="flex justify-between items-center min-w-210 pt-2 pb-4">
        {screenIsBig == true && (
          <div className="-mr-2 cursor-pointer" onClick={HandleIsOpenList}>
            <MenuIcon />
          </div>
        )}

        {/* =============== Open Desktop Panel =============== */}

        <div
          className={`bg-black/60 absolute top-0 bottom-0 left-0 right-0 transition-all duration-500 ease-in-out ${
            isOpenList ? "opacity-100 z-100" : "opacity-0 -z-10"
          }`}
        >
          <div
            className={`absolute top-0 left-0 bottom-0 w-100 h-full bg-white z-30 transition-all duration-500 ease-in-out flex flex-col justify-start items-center ${
              isOpenList ? "translate-x-0" : "-translate-x-100"
            }`}
          >
            <div className="HeaderMobileColor w-full py-2 text-white flex justify-start items-center px-5">
              <AccountCircleIcon fontSize="large" />
              <p className="ml-2 font-bold text-xl">Hello, sign in</p>
            </div>

            <div className="overflow-auto flex flex-col justify-between items-start w-full text-black border-b">
              <DesktopAllMenu />
            </div>
          </div>
          <div
            className={`absolute top-0 left-100 z-100 transition-all duration-500 ease-in-out p-1 pt-3 rounded cursor-pointer m-1 ${
              isOpenList ? "translate-x-0" : "-translate-x-100"
            }`}
            onClick={HandleIsOpenList}
          >
            <CloseIcon fontSize="large" />
          </div>
        </div>

        {/* =============== List Items =============== */}

        {data?.map((item: IlistItems) => (
          <li key={item.id} className={`cursor-pointer mr-5`}>
            {screenIsBig ? item.nameTwo : item.nameOne}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderListitems;
