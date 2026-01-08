import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function DesktopAllMenuItem({ content }: { content: string }) {
  return (
    <div className="cursor-pointer text-sm p-4 hover:bg-gray-200 w-full flex justify-between items-center">
      <p>{content}</p>
      <KeyboardArrowRightIcon />
    </div>
  );
}

export default DesktopAllMenuItem;
