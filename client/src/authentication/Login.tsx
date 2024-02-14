import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

function Login() {
  return (
    <section className="flex min-h-[100dvh] items-center justify-center">
      <section className="flex w-full max-w-[50rem] flex-col items-center justify-center">
        <Logo />
        <div className="mt-[5.1rem] self-stretch p-16">
          <h1 className="pb-0.8rem text-[3.2rem] font-bold leading-[4.8rem] text-[#333]">
            Login
          </h1>
          <h2 className="pb-16 text-[1.6rem] leading-[2.4rem] text-[#737373]">
            Add your details below to get back into the app
          </h2>
          <form className="flex flex-col space-y-[2.4rem]">
            <div>
              <label
                htmlFor="email"
                className="block pb-[0.3rem] text-[1.2rem] leading-[1.8rem] text-[#333]"
              >
                Email address
              </label>
              <div className="relative flex">
                <img
                  src="./icon-email.svg"
                  alt="email icon"
                  className="absolute left-[2.5%] top-[40%]"
                />
                <input
                  type="email"
                  placeholder="e.g. alex@email.com"
                  id="email"
                  className="focus:shadow-purple-sh w-full rounded-[0.8rem] border border-solid border-[#d9d9d9] bg-white py-5 pl-[3.5rem] text-[1.6rem] leading-[2.4rem] text-[#333] caret-[#633cff] outline-none focus:border-[#633cff]"
                />
                <p className="absolute right-[2.5%] top-[40%] hidden text-[1.2rem] leading-[1.8rem] text-[#ff3939]">
                  cant't be empty
                </p>
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block pb-[0.3rem] text-[1.2rem] leading-[1.8rem] text-[#333]"
              >
                Password
              </label>
              <div className="relative flex">
                <img
                  src="./icon-password.svg"
                  alt="password icon"
                  className="absolute left-[2.5%] top-[40%]"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                  className="focus:shadow-purple-sh w-full rounded-[0.8rem] border border-solid border-[#d9d9d9] bg-white py-5 pl-[3.5rem] text-[1.6rem] leading-[2.4rem] text-[#333] caret-[#633cff] outline-none focus:border-[#633cff]"
                />
                <p className="absolute right-[2.5%] top-[40%] hidden text-[1.2rem] leading-[1.8rem] text-[#ff3939]">
                  cant't be empty
                </p>
              </div>
            </div>

            <button className="hover:shadow-purple-sh rounded-[0.8rem] bg-[#633cff] py-4 text-[1.6rem] font-bold leading-[2.4rem] text-white hover:bg-[#beadff]">
              Login
            </button>

            <h3 className="text-center text-[1.6rem] leading-[2.4rem] text-[#737373]">
              Don’t have an account?{" "}
              <Link to="/" className="text-[#633cff]">
                Create account
              </Link>
            </h3>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Login;
