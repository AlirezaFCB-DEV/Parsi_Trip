"use client";

import React, { createContext, useContext, useState } from "react";

interface IcontainerContext {
  isOpenList: boolean;
  HandleIsOpenList: () => void;
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

  return (
    <containerContext.Provider value={{ isOpenList, HandleIsOpenList }}>
      {children}
    </containerContext.Provider>
  );
}

export default ContainerContextProvider;
