"use client";

import useHeaderOptions from "@/services/Header/Header-options/hook";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { IoptionNames } from "@/services/Header/Header-options/types";
import { useState } from "react";

function NavBarOptionList() {
  let [searchFilterList, setSearchFilterList] = useState<boolean>(false);
  const [searchFilterListValue, setSearchFilterListValue] =
    useState<string>("All");

  const { data } = useHeaderOptions();

  return (
    <>
      <div
        className="text-black rounded-l-lg cursor-pointer bg-gray-300 border-r border-gray-500 py-3 pl-2 min-w-15 h-12 hidden overflow-auto xl:flex justify-center items-center whitespace-nowrap"
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
            onClick={() => {
              setSearchFilterListValue(item.name);
              setSearchFilterList(false);
            }}
            className="transition-all duration-100 ease-in-out hover:bg-gray-400 cursor-pointer w-full"
          >
            {item.name}
          </p>
        ))}
      </div>
    </>
  );
}

export default NavBarOptionList;
