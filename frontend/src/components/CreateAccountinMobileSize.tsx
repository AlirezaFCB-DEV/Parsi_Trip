"use client";

import { useContainerContext } from "@/context/container";

function CreateAccountinMobileSize() {
  const { isTrueCreateNewCustomerForm, HandleCreateNewCustomerForm } =
    useContainerContext();

  return (
    <>
      <section className="flex justify-start items-center border-b border-gray-300 py-3 px-5">
        <input
          type="radio"
          id="create-account"
          name="create-account"
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
        <section className="w-full flex flex-col justify-between items-start py-3 px-5">
          <label htmlFor="first&last-name" className="ml-1">
            First and last name
          </label>

          <input
            id="first&last-name"
            type="text"
            className="p-2.5 rounded-xl border border-gray-500 w-full"
          />
        </section>

        <section className="w-full flex flex-col justify-between items-start py-3 px-5">
          <label htmlFor="first&last-name" className="ml-1">
            Mobile number or email
          </label>

          <input
            id="first&last-name"
            type="text"
            className="p-2.5 rounded-xl border border-gray-500 w-full"
          />
        </section>

        <section className="w-full flex flex-col justify-between items-start py-3 px-5">
          <label htmlFor="first&last-name" className="ml-1">
            Create a password
          </label>

          <input
            id="first&last-name"
            type="text"
            className="p-2.5 rounded-xl border border-gray-500 w-full"
          />
        </section>

        <section className="flex justify-start items-center py-3 px-5">
          <input
            type="checkbox"
            id="show-password"
            className="scale-150"
            defaultChecked={true}
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

export default CreateAccountinMobileSize;
