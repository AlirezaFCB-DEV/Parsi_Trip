import SearchIcon from "@mui/icons-material/Search";

import NavBarOptionList from "./NavBarOptionList";

function HeaderSearchBar() {
  return (
    <form className="w-full xl:w-[60%] 2xl:w-[67%] xl:ml-55 xl:-mt-15 py-3 xl:py-2 flex justify-center items-center">
      <section className="relative">
        <NavBarOptionList />
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
  );
}

export default HeaderSearchBar;
