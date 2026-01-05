import SearchIcon from "@mui/icons-material/Search";

import NavBarOptionList from "./NavBarOptionList";

function HeaderSearchBar() {
  return (
    <form className="w-full xl:w-[60%] 2xl:w-[63%] 2xl:mx-auto xl:ml-55 xl:-mt-15 py-3 xl:py-2 flex justify-center items-center">
      <section className="relative">
        <NavBarOptionList />
      </section>

      <input
        type="text"
        className="w-full rounded-lg xl:rounded-l-none p-2 bg-white opacity-90 placeholder:text-gray-500 -mr-12 text-black focus:outline-hidden focus:bg-gray-100"
        placeholder="Search Amazon"
      />

      <section className="py-1.75 px-3 rounded-lg SearchIconColor text-black cursor-pointer z-10">
        <SearchIcon fontSize="medium" />
      </section>
    </form>
  );
}

export default HeaderSearchBar;
