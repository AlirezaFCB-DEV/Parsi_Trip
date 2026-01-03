import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

interface ToptionNames {
  name: string;
  id: number;
}

function NabBar() {
  const optionNames: ToptionNames[] = [
    { name: "All", id: 1 },
    { name: "ALL Department", id: 2 },
    { name: "Arts & craft", id: 3 },
    { name: "Automotive", id: 4 },
    { name: "Baby", id: 5 },
    { name: "Beauty & Personal Care", id: 6 },
    { name: "Books", id: 7 },
    { name: "Boy's Fashion", id: 8 },
    { name: "Computers", id: 9 },
    { name: "Deals", id: 10 },
    { name: "Digital Music", id: 11 },
    { name: "Electronices", id: 12 },
    { name: "Girl's Fashion", id: 13 },
    { name: "Health & Household", id: 14 },
    { name: "Home & Kitchen", id: 15 },
    { name: "Industrial & Scientific", id: 16 },
    { name: "Kindle Store", id: 17 },
    { name: "Luggage", id: 18 },
    { name: "Men's Fashion", id: 19 },
    { name: "Movies & TV", id: 20 },
    { name: "Music , CDs & Vinyl", id: 21 },
    { name: "Pet Supplies", id: 22 },
    { name: "Prime Video", id: 23 },
    { name: "Software", id: 24 },
    { name: "Sports & Outdoors", id: 25 },
    { name: "Tools & Home Improvement", id: 26 },
    { name: "Toys & Games", id: 27 },
    { name: "Video Games", id: 28 },
    { name: "Women's Fashion", id: 29 },
  ];

  return (
    <nav className="px-3 w-full HeaderMobileColor text-white">
      <div className="flex justify-between items-center w-full pt-2 xl:pt-0 xl:h-15">
        <section className="flex flex-row-reverse justify-between items-center">
          <img
            src="./images/nabBar-picture.png"
            alt="navbar-img"
            className="w-20 mt-3 ml-3"
          />

          <MenuIcon className="cursor-pointer" />
        </section>

        <section className="flex justify-between items-center">
          <div className="flex justify-between items-centere items-center mr-5 cursor-pointer">
            <p className="text-sm">Sign in {`>`}</p>
            <PermIdentityIcon />
          </div>

          <AddShoppingCartIcon className="cursor-pointer" />
        </section>
      </div>

      <form className="w-full xl:w-6/10 mx-auto xl:-mt-15 py-3 xl:py-2 flex justify-center items-center">
        <select
          name="category"
          defaultValue="All"
          className="text-black rounded-l-lg bg-gray-400 py-3 w-15 hidden xl:block"
        >
          {optionNames.map((option: ToptionNames) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>

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
