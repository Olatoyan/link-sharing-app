import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import validator from "validator";
import { useLogin } from "./useLogin";
import MiniSpinner from "../ui/MiniSpinner";

type FormData = {
  email: string;
  password: string;
};
function Login() {
  const { register, handleSubmit, formState } = useForm<FormData>();

  const { errors } = formState;

  const { isLoggingIn, loginFn } = useLogin();

  function onSubmit(data: FormData) {
    loginFn({
      email: data.email,
      password: data.password,
    });
  }

  return (
    <section className="flex min-h-[100dvh] items-center justify-center py-8">
      <section className="flex w-full max-w-[50rem] flex-col items-center justify-center mobile:items-start">
        <img src="./logo-devlinks-large.svg" alt="logo" className="px-16" />
        <div className="mt-[5.1rem] self-stretch p-16 mobile:mt-0">
          <h1 className="pb-0.8rem text-[3.2rem] font-bold leading-[4.8rem] text-[#333] mobile:text-[2.4rem] mobile:leading-[3.6rem]">
            Login
          </h1>
          <h2 className="pb-16 text-[1.6rem] leading-[2.4rem] text-[#737373]">
            Add your details below to get back into the app
          </h2>
          <form
            className="flex flex-col space-y-[2.4rem]"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                  className={`w-full rounded-[0.8rem] border border-solid bg-white py-5 pl-[3.5rem] text-[1.6rem] leading-[2.4rem] text-[#333] outline-none focus:shadow-purple-sh  disabled:cursor-not-allowed disabled:bg-[#ccc] ${errors.email?.message ? "border-[#ff3939]" : "border-[#d9d9d9] caret-[#633cff] focus:border-[#633cff] "}`}
                  {...register("email", {
                    required: "Can’t be empty",
                    validate: (value) =>
                      validator.isEmail(value) || "Invalid email",
                  })}
                  disabled={isLoggingIn}
                />
                {errors.email?.message && (
                  <p className="absolute right-[2.5%] top-[40%] text-[1.2rem] leading-[1.8rem] text-[#ff3939]">
                    {errors.email.message}
                  </p>
                )}
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
                  className={`w-full rounded-[0.8rem] border border-solid bg-white py-5 pl-[3.5rem] text-[1.6rem] leading-[2.4rem] text-[#333] outline-none  focus:shadow-purple-sh disabled:cursor-not-allowed disabled:bg-[#ccc] ${errors.password?.message ? "border-[#ff3939]" : "border-[#d9d9d9] caret-[#633cff] focus:border-[#633cff] "}`}
                  {...register("password", {
                    required: "Can’t be empty",
                  })}
                  disabled={isLoggingIn}
                />
                {errors.password?.message && (
                  <p className="absolute right-[2.5%] top-[40%] text-[1.2rem] leading-[1.8rem] text-[#ff3939]">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <button
              className="flex justify-center rounded-[0.8rem] bg-[#633cff] py-4 text-[1.6rem] font-bold leading-[2.4rem] text-white hover:bg-[#beadff] hover:shadow-purple-sh disabled:cursor-not-allowed"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? <MiniSpinner /> : "Login"}
            </button>

            <h3 className="text-center text-[1.6rem] leading-[2.4rem] text-[#737373]">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-[#633cff]">
                Create account
              </Link>
            </h3>

            <Link
              to="/forgot-password"
              className="text-center text-[1.6rem] text-[#633cff]"
            >
              Forgot password?
            </Link>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Login;
