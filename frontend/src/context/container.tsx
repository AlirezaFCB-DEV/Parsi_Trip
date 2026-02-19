"use client";

import React, { createContext, useContext, useState } from "react";

interface IcontainerContext {
  isOpenList: boolean;
  HandleIsOpenList: () => void;

  desktopAllMenuItemPage: boolean;
  setDesktopAllMenuItemPage: React.Dispatch<React.SetStateAction<boolean>>;
  HandleDesktopAllMenuItemPages: () => void;

  isTrueSigninForm: boolean;
  isTrueCreateNewCustomerForm: boolean;
  HandleSiginForm: () => void;
  HandleCreateNewCustomerForm: () => void;
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

  // =============== Sigin And Login Page ===============

  const [isTrueSigninForm, setIsTrueSigninForm] = useState<boolean>(false);
  const [isTrueCreateNewCustomerForm, setIsTrueCreateNewCustomerForm] =
    useState<boolean>(false);

  const HandleSiginForm = () => {
    setIsTrueSigninForm(true);
    setIsTrueCreateNewCustomerForm(false);
  };

  const HandleCreateNewCustomerForm = () => {
    setIsTrueCreateNewCustomerForm(true);
    setIsTrueSigninForm(false);
  };

  return (
    <containerContext.Provider
      value={{
        isOpenList,
        HandleIsOpenList,
        desktopAllMenuItemPage,
        setDesktopAllMenuItemPage,
        HandleDesktopAllMenuItemPages,
        isTrueSigninForm,
        isTrueCreateNewCustomerForm,
        HandleCreateNewCustomerForm,
        HandleSiginForm,
      }}
    >
      {children}
    </containerContext.Provider>
  );
}

export default ContainerContextProvider;
