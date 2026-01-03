import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";

function NabBar() {
  return (
    <nav className="flex justify-between items-center w-full HeaderColor text-white px-3">
      <section className="flex flex-row-reverse justify-between items-center">
        <img
          src="./images/nabBar-picture.png"
          alt="navbar-img"
          className="w-20 mt-3 ml-3"
        />

        <MenuIcon />
      </section>

      <section className="flex justify-between items-center">
        <div className="flex justify-between items-centeren items-center mr-5">
          <p>Sign in {`>`}</p>
          <PermIdentityIcon />
        </div>

        <AddShoppingCartIcon />
      </section>
    </nav>
  );
}

export default NabBar;
