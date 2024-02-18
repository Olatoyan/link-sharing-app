import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import { UseSignup } from "./useSignup";
import { useForm } from "react-hook-form";
import validator from "validator";
import MiniSpinner from "../ui/MiniSpinner";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};
function Signup() {
  const { register, handleSubmit, getValues, formState, reset } =
    useForm<FormData>();

  const { errors } = formState;

  const { signUp, isSigningUp } = UseSignup();

  function onSubmit(data: FormData) {
    signUp(
      {
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  }

  return (
    <section className="flex min-h-[100dvh] items-center justify-center">
      <section className="flex w-full max-w-[50rem] flex-col items-center justify-center">
        <Logo />
        <div className="mt-[5.1rem] self-stretch p-16">
          <h1 className="pb-0.8rem text-[3.2rem] font-bold leading-[4.8rem] text-[#333]">
            Create account
          </h1>
          <h2 className="pb-16 text-[1.6rem] leading-[2.4rem] text-[#737373]">
            Let's get you started sharing your links!
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
                  disabled={isSigningUp}
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
                Create password
              </label>
              <div className="relative flex">
                <img
                  src="./icon-password.svg"
                  alt="password icon"
                  className="absolute left-[2.5%] top-[40%]"
                />

                <input
                  type="password"
                  placeholder="At least 8 characters"
                  id="password"
                  className={`w-full rounded-[0.8rem] border border-solid bg-white py-5 pl-[3.5rem] text-[1.6rem] leading-[2.4rem] text-[#333] outline-none focus:shadow-purple-sh  disabled:cursor-not-allowed disabled:bg-[#ccc] ${errors.password?.message ? "border-[#ff3939]" : "border-[#d9d9d9] caret-[#633cff] focus:border-[#633cff] "}`}
                  {...register("password", {
                    required: "Can’t be empty",
                    minLength: {
                      value: 8,
                      message: "Must be at least 8 characters",
                    },
                  })}
                  disabled={isSigningUp}
                />
                {errors.password?.message && (
                  <p className="absolute right-[2.5%] top-[40%] text-[1.2rem] leading-[1.8rem] text-[#ff3939]">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="confirm"
                className="block pb-[0.3rem] text-[1.2rem] leading-[1.8rem] text-[#333]"
              >
                Confirm password
              </label>
              <div className="relative flex">
                <img
                  src="./icon-password.svg"
                  alt="password icon"
                  className="absolute left-[2.5%] top-[40%]"
                />
                <input
                  type="password"
                  placeholder="At least 8 characters"
                  id="confirm"
                  className={`w-full rounded-[0.8rem] border border-solid bg-white py-5 pl-[3.5rem] text-[1.6rem] leading-[2.4rem] text-[#333] outline-none focus:shadow-purple-sh  disabled:cursor-not-allowed disabled:bg-[#ccc] ${errors.confirmPassword?.message ? "border-[#ff3939]" : "border-[#d9d9d9] caret-[#633cff] focus:border-[#633cff] "}`}
                  {...register("confirmPassword", {
                    required: "Can’t be empty",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Passwords don't match",
                  })}
                  disabled={isSigningUp}
                />
                {errors.confirmPassword?.message && (
                  <p className="absolute right-[2.5%] top-[40%] text-[1.2rem] leading-[1.8rem] text-[#ff3939]">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
            <p className="text-[1.2rem] leading-[1.8rem] text-[#737373]">
              Password must contain at least 8 characters
            </p>
            <button
              className="flex justify-center rounded-[0.8rem] bg-[#633cff] py-4 text-[1.6rem] font-bold leading-[2.4rem] text-white hover:bg-[#beadff] hover:shadow-purple-sh disabled:cursor-not-allowed"
              disabled={isSigningUp}
            >
              {isSigningUp ? <MiniSpinner /> : "Create new account"}
            </button>

            <h3 className="text-center text-[1.6rem] leading-[2.4rem] text-[#737373]">
              Already have an account?{" "}
              <Link to="/login" className="text-[#633cff]">
                Log in
              </Link>
            </h3>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Signup;
