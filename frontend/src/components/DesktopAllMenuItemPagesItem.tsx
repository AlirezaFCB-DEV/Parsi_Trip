function DesktopAllMenuItemPagesItem({ content }: { content: string }) {
  return (
    <li className="hover:bg-gray-200 w-full py-2 px-1 cursor-pointer">
      {content}
    </li>
  );
}

export default DesktopAllMenuItemPagesItem;
