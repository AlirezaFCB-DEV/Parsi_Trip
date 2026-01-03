"use client";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PlaceIcon from "@mui/icons-material/Place";

import { useState } from "react";
import useHeaderOptions from "@/services/Header/Header-options/hook";
import { IoptionNames } from "@/services/Header/Header-options/types";

interface IsignTexts {
  itemOne: string;
  itemTwo: string;
}

function NabBar() {
  const [signinTexts, setSigninTexts] = useState<IsignTexts>({
    itemOne: "Sign in >",
    itemTwo: "Hello,sign in Account & Lists ",
  });
  let [searchFilterList, setSearchFilterList] = useState<boolean>(false);
  const [searchFilterListValue, setSearchFilterListValue] =
    useState<string>("All");

  const { data } = useHeaderOptions();

  return (
    <nav className="px-3 w-full HeaderMobileColor text-white">
      <div className="flex justify-between items-center w-full pt-2 xl:pt-0 xl:h-15">
        <section className="flex flex-row-reverse justify-between items-center xl:w-53">
          <div className="hidden xl:block text-[13px] mx-auto ml-4">
            <p className="ml-2">Deliver to</p>
            <section className="flex -ml-3">
              <PlaceIcon fontSize="small" />
              <p className="font-bold">United Kingdom</p>
            </section>
          </div>

          <img
            src="./images/nabBar-picture.png"
            alt="navbar-img"
            className="w-20 mt-3 ml-3 xl:ml-0"
          />
          <div className="xl:hidden">
            <MenuIcon className="cursor-pointer" />
          </div>
        </section>

        <section className="flex justify-between items-center xl:w-70">
          <div className="flex justify-between items-center mr-5 cursor-pointer">
            <p className="text-[13px] xl:hidden">{signinTexts.itemOne}</p>

            <p className="text-[13px] hidden xl:flex items-center">
              {signinTexts.itemTwo}
              <ArrowDropDownIcon />
            </p>

            <div className="block xl:hidden">
              <PermIdentityIcon fontSize="large" />
            </div>
          </div>

          <p className="text-[13px] w-15 hidden xl:block mr-5">
            <span>Returns</span> <span className="font-bold">&Orders</span>
          </p>

          <div className="flex justify-between items-end">
            <AddShoppingCartIcon fontSize="large" className="cursor-pointer" />
            <p className="font-bold text-[13px] hidden xl:block">Cart</p>
          </div>
        </section>
      </div>

      <form className="w-full xl:w-[60%] 2xl:w-[72.5%] xl:ml-55 xl:-mt-15 py-3 xl:py-2 flex justify-center items-center">
        <section className="relative">
          <div
            className="text-black rounded-l-lg bg-gray-300 border-r border-gray-500 py-3 w-15 hidden overflow-auto xl:flex justify-center items-center"
            onClick={() => setSearchFilterList(!searchFilterList)}
          >
            {searchFilterListValue} <ArrowDropDownIcon />
          </div>
          <div
            className={`bg-gray-300 p-2 w-60 absolute left-0 rounded-b-lg transition-all duration-500 flex flex-col justify-between items-start ${
              searchFilterList
                ? "opacity-100 top-12 z-20 text-black"
                : "opacity-0 top-30 -z-20"
            }`}
          >
            {data?.map((item: IoptionNames) => (
              <p
                key={item.id}
                onClick={() => setSearchFilterListValue(item.name)}
                className="transition-all duration-100 ease-in-out hover:bg-gray-400 cursor-pointer w-full"
              >
                {item.name}
              </p>
            ))}
          </div>
        </section>

        <input
          type="text"
          className="w-full rounded-xl xl:rounded-l-none p-3 bg-white opacity-90 placeholder:text-gray-500 -mr-14"
          placeholder="Search Amazon"
        />

        <section className="py-[6.5px] px-3 rounded-xl bg-amber-300 text-black cursor-pointer z-10">
          <SearchIcon fontSize="large" />
        </section>
      </form>
    </nav>
  );
}

export default NabBar;
