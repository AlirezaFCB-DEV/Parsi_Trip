"use client";

// =============== Material UI Icons ===============

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PlaceIcon from "@mui/icons-material/Place";

import HeaderSearchBar from "./HeaderSearchBar";
import HeaderListitems from "./HeaderListItem";

function NabBar() {
  return (
    <nav className="px-3 w-full HeaderMobileColor text-white">
      <div className="flex justify-between items-center w-full pt-2 xl:pt-0 xl:h-15">
        <section className="flex flex-row-reverse justify-between items-center xl:w-53 2xl:w-60">
          <div className="hidden xl:block text-[13px] mx-auto ml-4 2xl:ml-10">
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
            <p className="text-[13px] xl:hidden">Sign in {`>`}</p>

            <p className="text-[13px] hidden xl:flex items-center">
              Hello,sign in Account & Lists
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

      {/* =============== Search Bar =============== */}

      <HeaderSearchBar />

      {/* =============== List Items =============== */}

      <HeaderListitems />
    </nav>
  );
}

export default NabBar;
