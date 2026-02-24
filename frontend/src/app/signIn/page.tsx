import CreateAccountinMobileAndDesktopSize from "@/components/CreateAccountinMobileAndDesktopSize";
import SigninInMobileAndDesktopSize from "@/components/Signin-inMobileAndDesktopSize";

function SignIn() {
  return (
    <div className="bg-gray-100">
      <main className="flex flex-col justify-between items-start max-w-100 lg:w-90 mx-auto p-3">
        <h1 className="font-extrabold text-xl my-2 lg:hidden">Welcome</h1>
        <img
          src="https://cheapsafar.com/wp-content/uploads/2015/09/Buy-Amazon-Payments.jpg"
          className="hidden lg:block w-30 mx-auto"
          alt=""
        />

        <form
          method="POST"
          className="font-extrabold text-sm w-full rounded-lg border border-gray-300 mb-12 bg-white"
        >
          {/* =============== Create New Account in Mobile Size =============== */}

          <section className="lg:hidden">
            <CreateAccountinMobileAndDesktopSize />
          </section>

          {/* =============== Sign in in Mobile Size =============== */}
          <section>
            <SigninInMobileAndDesktopSize />
          </section>
        </form>
      </main>

      <footer>
        <section className="w-full flex flex-col justify-between items-center bg-gray-950 lg:bg-white text-white lg:text-black lg:border-t lg:border-gray-400 lg:pt-5">
          <div className="w-55 my-10 flex justify-between items-center lg:hidden">
            <div className="flex justify-between items-center text-sm">
              <p>English</p>
            </div>

            <div className="flex justify-between items-center text-sm">
              <p>United States</p>
            </div>
          </div>

          <p className="mb-5 lg:hidden">
            Already a customer?<span> Sign in</span>
          </p>

          <div className="flex flex-col justify-between items-center text-[10px] text-white/70 lg:hidden">
            <div className="flex justify-between items-center gap-5">
              <p>Conditions of Use</p>

              <p>Privacy Notice</p>
            </div>

            <div className="flex justify-between items-center gap-5 lg:hidden">
              <p>Consumer Health Data Privacy</p>

              <p>Your Ads Privacy Choices</p>
            </div>
          </div>

          <div className="hidden lg:flex justify-between items-center w-55 text-blue-600">
            <p className="hover:border-b border-gray-800 hover:text-gray-800 text-[10px] cursor-pointer">
              Conditions of Use
            </p>
            <p className="hover:border-b border-gray-800 hover:text-gray-800 text-[10px] cursor-pointer">
              Privacy Notice
            </p>
            <p className="hover:border-b border-gray-800 hover:text-gray-800 text-[10px] cursor-pointer">
              {" "}
              Help{" "}
            </p>
          </div>

          <p className="text-white/80 lg:text-gray-600 mt-5 mb-15 text-center text-[10px]">
            © 1996-2026, Amazon.com, Inc. or its affiliates
          </p>
        </section>
      </footer>
    </div>
  );
}

export default SignIn;
