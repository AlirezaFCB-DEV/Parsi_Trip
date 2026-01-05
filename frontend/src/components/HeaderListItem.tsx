"use client";

import useListItems from "@/services/Header/Header-list-items/hook";
import { IlistItems } from "@/services/Header/Header-list-items/types";
import { useEffect, useState } from "react";

// =============== Material UI Icons ===============

import MenuIcon from "@mui/icons-material/Menu";

function HeaderListitems() {
  const { data } = useListItems();

  let [screenIsBig, setScreenIsBig] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      setScreenIsBig(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", checkScreen);

    return () => removeEventListener("resize", checkScreen);
  }, []);

  if (screenIsBig == null) return null;

  return (
    <div className="w-full flex justify-start items-center overflow-x-auto scrollbar-hide">
      <ul className="flex justify-between items-center min-w-210 pt-2 pb-4">
        {screenIsBig == true && <MenuIcon className="-mr-2 cursor-pointer" />}

        {data?.map((item: IlistItems) => (
          <li key={item.id} className="cursor-pointer mr-5">
            {screenIsBig ? item.nameTwo : item.nameOne}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderListitems;
