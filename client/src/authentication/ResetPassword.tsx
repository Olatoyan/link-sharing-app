import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import MiniSpinner from "../ui/MiniSpinner";
import Cookies from "js-cookie";
import { useResetPassword } from "./useResetPassword";
import toast from "react-hot-toast";
import { useEffect } from "react";

type ResetPasswordFormData = {
  password: string;
  confirmPassword: string;
};

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const email = Cookies.get("forgotMail");

  const { register, handleSubmit, getValues, formState } =
    useForm<ResetPasswordFormData>();

  const { errors } = formState;

  const { isResetting, resetPassword } = useResetPassword();

  function onSubmit(data: ResetPasswordFormData) {
    if (token) {
      resetPassword(
        {
          token,
          password: data.password,
          confirmPassword: data.confirmPassword,
        },
        {
          onSuccess: () => {
            toast.success("Password reset successfully. You can log in now.");
            navigate("/login");
            Cookies.remove("forgotMail");
          },
          onError: (error) => {
            toast.error(error.message);
          },
        },
      );
    }
  }

  useEffect(() => {
    if (!email) navigate("/login");
  }, [email, navigate]);

  return (
    <section className="flex min-h-[100dvh] items-center justify-center py-8">
      <section className="flex w-full max-w-[50rem] flex-col items-center justify-center mobile:items-start">
        <img src="./logo-devlinks-large.svg" alt="logo" className="px-16" />
        <div className="mt-[5.1rem] self-stretch p-16 mobile:mt-0">
          <h1 className="pb-0.8rem text-[3.2rem] font-bold leading-[4.8rem] text-[#333] mobile:text-[2.4rem] mobile:leading-[3.6rem]">
            Reset Password
          </h1>
          <h2 className="pb-16 text-[1.6rem] leading-[2.4rem] text-[#737373]">
            Enter your new password below.
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
                  defaultValue={email}
                  className={`w-full rounded-[0.8rem] border border-solid bg-white py-5 pl-[3.5rem] text-[1.6rem] leading-[2.4rem] text-[#333] outline-none focus:shadow-purple-sh disabled:cursor-not-allowed disabled:bg-[#ccc] `}
                  disabled={true}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block pb-[0.3rem] text-[1.2rem] leading-[1.8rem] text-[#333]"
              >
                New Password
              </label>
              <div className="relative flex">
                <img
                  src="./icon-password.svg"
                  alt="password icon"
                  className="absolute left-[2.5%] top-[40%]"
                />
                <input
                  type="password"
                  placeholder="Enter your new password"
                  id="password"
                  className={`w-full rounded-[0.8rem] border border-solid bg-white py-5 pl-[3.5rem] text-[1.6rem] leading-[2.4rem] text-[#333] outline-none focus:shadow-purple-sh disabled:cursor-not-allowed disabled:bg-[#ccc]  ${errors.password?.message ? "border-[#ff3939]" : "border-[#d9d9d9] caret-[#633cff] focus:border-[#633cff] "}`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  disabled={isResetting}
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
                htmlFor="confirmPassword"
                className="block pb-[0.3rem] text-[1.2rem] leading-[1.8rem] text-[#333]"
              >
                Confirm Password
              </label>
              <div className="relative flex">
                <img
                  src="./icon-password.svg"
                  alt="password icon"
                  className="absolute left-[2.5%] top-[40%]"
                />
                <input
                  type="password"
                  placeholder="Confirm your new password"
                  id="confirmPassword"
                  className={`w-full rounded-[0.8rem] border border-solid bg-white py-5 pl-[3.5rem] text-[1.6rem] leading-[2.4rem] text-[#333] outline-none focus:shadow-purple-sh disabled:cursor-not-allowed disabled:bg-[#ccc]  ${errors.confirmPassword?.message ? "border-[#ff3939]" : "border-[#d9d9d9] caret-[#633cff] focus:border-[#633cff] "}`}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Passwords do not match",
                  })}
                  disabled={isResetting}
                />
                {errors.confirmPassword?.message && (
                  <p className="absolute right-[2.5%] top-[40%] text-[1.2rem] leading-[1.8rem] text-[#ff3939]">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
            <button className="flex justify-center rounded-[0.8rem] bg-[#633cff] py-4 text-[1.6rem] font-bold leading-[2.4rem] text-white hover:bg-[#beadff] hover:shadow-purple-sh">
              {isResetting ? <MiniSpinner /> : "Reset Password"}
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}

export default ResetPassword;
