import DesktopAllMenuItem from "./DesktopAllMenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function DesktopAllMenu({
  title,
  titleItemOne,
  titleItemTwo,
  titleItemThree,
  titleItemFour,
  newItemOne,
  newItemTwo,
  HandleDesktopAllMenu,
}: {
  title: string;
  titleItemOne: string;
  titleItemTwo?: string;
  titleItemThree: string;
  titleItemFour: string;

  // =============== New Items Props ===============

  newItemOne?: string;
  newItemTwo?: string;

  // =============== Context Datas ===============

  HandleDesktopAllMenu: () => void;
}) {
  return (
    <div className="flex flex-col justify-between items-start w-full border-b border-gray-600">
      <h2 className="font-bold text-lg lg:text-xl p-5">{title}</h2>

      <div
        className="flex flex-col justify-between items-start w-full"
        onClick={HandleDesktopAllMenu}
      >
        <DesktopAllMenuItem content={titleItemOne} />
      </div>

      <div
        onClick={HandleDesktopAllMenu}
        className={`${
          titleItemTwo
            ? "flex flex-col justify-between items-start w-full"
            : "hidden"
        }`}
      >
        <DesktopAllMenuItem content={titleItemTwo} />
      </div>

      <p
        className={`cursor-pointer text-sm p-4 hover:bg-gray-200 w-full ${
          newItemOne ? "flex" : "hidden"
        } justify-start items-center`}
      >
        {newItemOne}
      </p>

      <div
        onClick={HandleDesktopAllMenu}
        className="flex flex-col justify-between items-start w-full"
      >
        <DesktopAllMenuItem content={titleItemThree} />
      </div>

      <div
        onClick={HandleDesktopAllMenu}
        className="flex flex-col justify-between items-start w-full"
      >
        <DesktopAllMenuItem content={titleItemFour} />
      </div>

      <p
        className={`cursor-pointer text-sm p-4 hover:bg-gray-200 w-full ${
          newItemTwo ? "flex" : "hidden"
        } flex justify-start items-center`}
      >
        {newItemTwo} <KeyboardArrowDownIcon />
      </p>
    </div>
  );
}

export default DesktopAllMenu;
