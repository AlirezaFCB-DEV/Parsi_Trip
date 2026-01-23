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
}: {
  title: string;
  titleItemOne: string;
  titleItemTwo?: string;
  titleItemThree: string;
  titleItemFour: string;
  newItemOne?: string;
  newItemTwo?: string;
}) {
  return (
    <div className="flex flex-col justify-between items-start w-full border-b border-gray-600">
      <h2 className="font-bold text-xl p-5">{title}</h2>

      <DesktopAllMenuItem content={titleItemOne} />

      <div
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

      <DesktopAllMenuItem content={titleItemThree} />

      <DesktopAllMenuItem content={titleItemFour} />

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
