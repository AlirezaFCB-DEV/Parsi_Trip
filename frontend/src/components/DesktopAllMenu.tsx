import DesktopAllMenuItem from "./DesktopAllMenuItem";

function DesktopAllMenu({
  title,
  newItemOne,
  newItemTwo,
}: {
  title: string;
  newItemOne?: string;
  newItemTwo?: string;
}) {
  return (
    <div className="flex flex-col justify-between items-start w-full border-b border-gray-600">
      <h2 className="font-bold text-xl p-5">{title}</h2>

      <DesktopAllMenuItem content="Electronics" />
      <DesktopAllMenuItem content="AmazonMusic" />
      <p
        className={`cursor-pointer text-sm p-4 hover:bg-gray-200 w-full ${
          newItemOne ? "flex" : "hidden"
        } justify-between items-center`}
      >
        {newItemOne}
      </p>
      <DesktopAllMenuItem content="Kindle E-readers Books" />
      <p
        className={`cursor-pointer text-sm p-4 hover:bg-gray-200 w-full ${
          newItemTwo ? "flex" : "hidden"
        } flex justify-between items-center`}
      >
        {newItemTwo}
      </p>
      <DesktopAllMenuItem content="Amazon Appstore" />
    </div>
  );
}

export default DesktopAllMenu;
