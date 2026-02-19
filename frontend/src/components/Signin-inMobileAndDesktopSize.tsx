"use client";

import { useContainerContext } from "@/context/container";
import { useState } from "react";

function SigninInMobileAndDesktopSize() {
  const { isTrueSigninForm, HandleSiginForm } = useContainerContext();
  const [emailIpt, setEmailIpt] = useState<string>();

  return (
    <>
      <section
        className={`flex justify-start items-center ${isTrueSigninForm ? "bg-white" : "bg-gray-200 border-b border-gray-300"} py-3 px-5 lg:hidden`}
      >
        <input
          type="radio"
          id="signin-btn"
          className="scale-150"
          name="user-options-for-enter"
          defaultChecked={isTrueSigninForm}
          onClick={() => HandleSiginForm()}
        />

        <label
          htmlFor="signin-btn"
          className="flex justify-between items-center text-sm ml-5"
        >
          Sign in
          <p className="text-[13px] font-light ml-2">Already a Customer?</p>
        </label>
      </section>

      <h2 className="hidden lg:block mx-6 mt-5 text-xl font-light">
        Sign in or create account
      </h2>

      <div className={`${isTrueSigninForm ? "block" : "hidden"}`}>
        <section className="w-full flex flex-col justify-between items-start px-5 py-3">
          <label htmlFor="user-numberOrEmail" className="ml-1">
            Enter mobile number or email
          </label>

          <input
            type="text"
            id="user-numberOrEmail"
            className="w-full rounded border p-2.5 border-gray-500"
            onChange={(e) => setEmailIpt(e.target.value)}
          />
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

          <p className="py-4 border-b border-gray-300 w-full">
            Buying for work?
            <br />
            <span className="text-blue-600 font-light">
              Create a free business account
            </span>
          </p>
        </section>
      </div>
    </>
  );
}

export default SigninInMobileAndDesktopSize;
