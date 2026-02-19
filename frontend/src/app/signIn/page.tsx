// "use client"

import SignIninMobileSize from "@/components/CreateAccountinMobileSize";
import SigninInMobileSize from "@/components/Signin-inMobileSize";

// =============== Material IU Icons ===============

import LanguageIcon from "@mui/icons-material/Language";

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

          <SigninInMobileSize />
        </form>
      </main>

      <footer>
        <section className="w-full flex flex-col justify-between items-center bg-gray-950 text-white">
          <div className="w-55 my-15 flex justify-between items-center">
            <div className="flex justify-between items-center text-sm">
              <LanguageIcon fontSize="small" className="mr-2" />

              <p>English</p>
            </div>

            <div className="flex justify-between items-center text-sm">
              <LanguageIcon fontSize="small" className="mr-2" />

              <p>United States</p>
            </div>
          </div>

          <p className="mb-5">
            Already a customer?<span> Sign in</span>
          </p>

          <div className="flex flex-col justify-between items-center text-[10px] text-white/70">
            <div className="flex justify-between items-center gap-5">
              <p>Conditions of Use</p>

              <p>Privacy Notice</p>
            </div>

            <div className="flex justify-between items-center gap-5">
              <p>Consumer Health Data Privacy</p>

              <p>Your Ads Privacy Choices</p>
            </div>
          </div>

          <p className="text-white/80 mt-5 mb-15 text-center text-[10px]">
            © 1996-2026, Amazon.com, Inc. or its affiliates
          </p>
        </section>
      </footer>
    </div>
  );
}

export default SignIn;
