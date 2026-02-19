"use client";

import { useContainerContext } from "@/context/container";

function SigninInMobileSize() {
  const { isTrueSigninForm, HandleSiginForm } = useContainerContext();

  return (
    <>
      <section
        className={`flex justify-start items-center ${isTrueSigninForm ? "bg-white" : "bg-gray-200 border-b border-gray-300"} py-3 px-5`}
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

      <div className={`${isTrueSigninForm ? "block" : "hidden"}`}>
        <section className="w-full flex flex-col justify-between items-start px-5 py-3">
          <label htmlFor="user-numberOrEmail" className="ml-1">
            Enter mobile number or email
          </label>

          <input
            type="text"
            id="user-numberOrEmail"
            className="w-full rounded border p-2.5 border-gray-500"
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

          <p className="px-5 py-5 border-b border-gray-300">
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

export default SigninInMobileSize;
