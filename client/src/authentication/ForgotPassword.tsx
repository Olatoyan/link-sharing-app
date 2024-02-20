import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import validator from "validator";
import { useForgotPassword } from "./useForgotPassword";
import MiniSpinner from "../ui/MiniSpinner";

type ForgotPasswordFormData = {
  email: string;
};

function ForgotPassword() {
  const { register, handleSubmit, formState, reset } =
    useForm<ForgotPasswordFormData>();

  const { errors } = formState;

  const { forgotPassword, isForgotPasswordLoading } = useForgotPassword();

  function onSubmit(data: ForgotPasswordFormData) {
    forgotPassword(data.email);
    reset();
  }

  return (
    <section className="flex min-h-[100dvh] items-center justify-center py-8">
      <section className="flex w-full max-w-[50rem] flex-col items-center justify-center mobile:items-start">
        <img src="./logo-devlinks-large.svg" alt="logo" className="px-16" />
        <div className="mt-[5.1rem] self-stretch p-16 mobile:mt-0">
          <h1 className="pb-0.8rem text-[3.2rem] font-bold leading-[4.8rem] text-[#333] mobile:text-[2.4rem] mobile:leading-[3.6rem]">
            Forgot Password
          </h1>
          <h2 className="pb-16 text-[1.6rem] leading-[2.4rem] text-[#737373]">
            Enter your email address to reset your password.
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
                  placeholder="Enter your email"
                  id="email"
                  className={`w-full rounded-[0.8rem] border border-solid bg-white py-5 pl-[3.5rem] text-[1.6rem] leading-[2.4rem] text-[#333] outline-none focus:shadow-purple-sh disabled:cursor-not-allowed disabled:bg-[#ccc]   ${errors.email?.message ? "border-[#ff3939]" : "border-[#d9d9d9] caret-[#633cff] focus:border-[#633cff] "}`}
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) =>
                      validator.isEmail(value) || "Invalid email",
                  })}
                  disabled={isForgotPasswordLoading}
                />
                {errors.email?.message && (
                  <p className="absolute right-[2.5%] top-[40%] text-[1.2rem] leading-[1.8rem] text-[#ff3939]">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <button className="flex justify-center rounded-[0.8rem] bg-[#633cff] py-4 text-[1.6rem] font-bold leading-[2.4rem] text-white hover:bg-[#beadff] hover:shadow-purple-sh">
              {isForgotPasswordLoading ? <MiniSpinner /> : "Submit"}
            </button>
          </form>
          <div className="pt-8 text-center">
            <Link to="/login" className="text-[1.6rem] text-[#633cff]">
              Back to login
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ForgotPassword;
