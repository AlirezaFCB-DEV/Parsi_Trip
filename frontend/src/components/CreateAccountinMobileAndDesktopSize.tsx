"use client";

import { useContainerContext } from "@/context/container";
import { Fragment, useState } from "react";

// =============== Material IU Icons ===============

import CloseIcon from "@mui/icons-material/Close";

interface IdataIpt {
  fullName: string;
  numberOrEmail: number | string;
  password: string;
}

function CreateAccountinMobileAndDesktopSize() {
  const { isTrueCreateNewCustomerForm, HandleCreateNewCustomerForm } =
    useContainerContext();

  const [dataIpt, setDataIpt] = useState<IdataIpt>({
    fullName: "",
    numberOrEmail: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(true);

  const HandleIsShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <section
        className={`flex justify-start items-center ${isTrueCreateNewCustomerForm ? "bg-white" : "bg-gray-200 border-b border-gray-300"} py-3 px-5`}
      >
        <input
          type="radio"
          id="create-account"
          name="user-options-for-enter"
          className="scale-150"
          defaultChecked={isTrueCreateNewCustomerForm}
          onClick={() => HandleCreateNewCustomerForm()}
        />

        <label
          htmlFor="create-account"
          className="flex justify-between items-center text-sm ml-5"
        >
          Create Account
          <p className="text-[13px] font-light ml-2">New To Amazon?</p>
        </label>
      </section>

      <div className={`${isTrueCreateNewCustomerForm ? "block" : "hidden"}`}>
        <section className="w-full flex flex-col justify-between items-start py-3 px-5 relative">
          <label htmlFor="first&last-name" className="ml-1">
            First and last name
          </label>

          <input
            id="first&last-name"
            type="text"
            value={dataIpt.fullName}
            className="p-2.5 rounded-xl border border-gray-500 w-full"
            onChange={(e) => {
              setDataIpt((prev) => {
                return { ...prev, fullName: e.target.value };
              });
            }}
          />

          <div
            className={`${dataIpt.fullName == "" ? "hidden" : "block"} absolute right-7 top-10`}
            onClick={() => {
              setDataIpt((prev) => ({ ...prev, fullName: "" }));
            }}
          >
            <CloseIcon />
          </div>
        </section>

        <section className="w-full flex flex-col justify-between items-start py-3 px-5 relative">
          <label htmlFor="EmailOrNumber" className="ml-1">
            Mobile number or email
          </label>

          <input
            id="EmailOrNumber"
            type="text"
            value={dataIpt.numberOrEmail}
            className="p-2.5 rounded-xl border border-gray-500 w-full"
            onChange={(e) => {
              setDataIpt((prev) => ({
                ...prev,
                numberOrEmail: e.target.value,
              }));
            }}
          />

          <div
            className={`${dataIpt.numberOrEmail == "" ? "hidden" : "block"} absolute right-7 top-10`}
            onClick={() => {
              setDataIpt((prev) => ({ ...prev, numberOrEmail: "" }));
            }}
          >
            <CloseIcon />
          </div>
        </section>

        <section className="w-full flex flex-col justify-between items-start py-3 px-5 relative">
          <label htmlFor="Password" className="ml-1">
            Create a password
          </label>

          <input
            id="Password"
            type="password"
            value={dataIpt.password}
            className={`${dataIpt.password != "" && "pb-9"} p-2.5 rounded-xl border border-gray-500 w-full`}
            onChange={(e) => {
              setDataIpt((prev) => ({ ...prev, password: e.target.value }));
            }}
          />

          <p
            className={`absolute left-8 bottom-5 text-gray-500 ${dataIpt.password != "" && showPassword ? "block" : "hidden"}`}
          >
            {dataIpt.password}
          </p>

          <div
            className={`${dataIpt.password == "" ? "hidden" : "block"} absolute right-7 top-10`}
            onClick={() => {
              setDataIpt((prev) => ({ ...prev, password: "" }));
            }}
          >
            <CloseIcon />
          </div>
        </section>

        <section className="flex justify-start items-center py-3 px-5">
          <input
            type="checkbox"
            id="show-password"
            className="scale-150"
            checked={showPassword}
            onClick={() => HandleIsShowPassword()}
          />

          <label
            htmlFor="show-password"
            className="text-gray-700 text-[12px] ml-3"
          >
            Show password
          </label>
        </section>

        <section className="w-full px-5 flex flex-col justify-between items-center">
          <button className="w-full rounded-full bg-yellow-300 font-medium p-3 py-2.5">
            Continue
          </button>

          <p className="font-light mt-5 pb-5 border-b border-gray-300">
            By creating an account, you agree to Amazon's
            <span className="border-b border-blue-600 text-blue-600 mr-1">
              Conditions of Use
            </span>
            and
            <span className="border-b border-blue-600 text-blue-600 ml-1">
              Privacy Notice
            </span>
            .
          </p>
        </section>

        <p className="px-5 py-5 border-b border-gray-300">
          Buying for work?
          <br />
          <span className="text-blue-600 font-light">
            Create a free business account
          </span>
        </p>
      </div>
    </>
  );
}

export default CreateAccountinMobileAndDesktopSize;
