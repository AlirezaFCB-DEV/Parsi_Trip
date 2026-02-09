import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DesktopAllMenuItemPagesItem from "./DesktopAllMenuItemPagesItem";

function DesktopAllMenuItemPages({
  HandleDesktopAllMenuItemPage,
}: {
  HandleDesktopAllMenuItemPage: () => void;
}) {
  return (
    <div className="w-full text-black overflow-y-scroll">
      <header
        className="flex justify-start items-center py-3 px-10 border-b border-gray-500 cursor-pointer"
        onClick={HandleDesktopAllMenuItemPage}
      >
        <ArrowBackIcon className="text-gray-500 mr-2" />

        <h2 className="font-bold text-sm">MAIN MENU</h2>
      </header>

      <main className="w-full p-3 flex flex-col justify-start items-start px-10 gap-4">
        <h1 className="text-xl font-bold">test</h1>

        <ul className="w-full flex flex-col justify-start items-start">
          <DesktopAllMenuItemPagesItem content="test" />
          <DesktopAllMenuItemPagesItem content="test" />
          <DesktopAllMenuItemPagesItem content="test" />
          <DesktopAllMenuItemPagesItem content="test" />
        </ul>
      </main>
    </div>
  );
}

export default DesktopAllMenuItemPages;
