"use client";

import React, { createContext, useContext, useState } from "react";

interface IcontainerContext {
  isOpenList: boolean;
  HandleIsOpenList: () => void;

  desktopAllMenuItemPage: boolean;
  HandleDesktopAllMenuItemPages: () => void;
}

const containerContext = createContext({} as IcontainerContext);

export function useContainerContext() {
  return useContext(containerContext);
}

function ContainerContextProvider({ children }: { children: React.ReactNode }) {
  const [isOpenList, setIsOpenList] = useState<boolean>(false);

  const HandleIsOpenList = () => {
    setIsOpenList((prev) => !prev);
  };

  // =============== Desktop All Menu Item Pages ===============

  const [desktopAllMenuItemPage, setDesktopAllMenuItemPage] =
    useState<boolean>(false);

  const HandleDesktopAllMenuItemPages = () => {
    setDesktopAllMenuItemPage((prev) => !prev);
  };

  return (
    <containerContext.Provider
      value={{
        isOpenList,
        HandleIsOpenList,
        desktopAllMenuItemPage,
        HandleDesktopAllMenuItemPages,
      }}
    >
      {children}
    </containerContext.Provider>
  );
}

export default ContainerContextProvider;
