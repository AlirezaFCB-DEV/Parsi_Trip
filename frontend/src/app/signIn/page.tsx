import HomePageFooter from "@/components/homePageFooter";
import SignIninMobileSize from "@/components/CreateAccountinMobileSize";

function SignIn() {
  return (
    <div className="bg-gray-100">
      <main className="flex flex-col justify-between items-start max-w-100 mx-auto p-3">
        <h1 className="font-extrabold text-xl my-2">Welcome</h1>

        <form
          method="POST"
          className="font-extrabold text-sm w-full rounded-lg border border-gray-300 mb-12 bg-white"
        >
          {/* =============== Create New Account in Mobile Size =============== */}

          <SignIninMobileSize />

          {/* =============== Sign in in Mobile Size =============== */}

          <section className="flex justify-start items-center border-b border-gray-300 py-3 px-5">
            <input type="radio" id="signin-btn" className="scale-150" />

            <label
              htmlFor="signin-btn"
              className="flex justify-between items-center text-sm ml-5"
            >
              Sign in
              <p className="text-[13px] font-light ml-2">Already a Customer?</p>
            </label>
          </section>
        </form>
      </main>

      <footer>
        <HomePageFooter />
      </footer>
    </div>
  );
}

export default SignIn;
