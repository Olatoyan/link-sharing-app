import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  confirmPassword: string;
};
function ProfileDetails() {
  const { register, handleSubmit, formState } = useForm<FormData>();

  const { errors } = formState;

  return (
    <div className="border-b border-solid border-[#d9d9d9] bg-white p-16 pb-0">
      <h1 className="pb-[0.8rem] text-[3.2rem] font-bold leading-[4.8rem] text-[#333]">
        Profile Details
      </h1>
      <p className="text-[1.6rem] leading-[2.4rem] text-[#737373]">
        Add your details to create a personal touch to your profile.
      </p>

      <form>
        <div className="flex items-center justify-between gap-[1.6rem] p-8">
          <span className="w-[24rem] text-[1.6rem] leading-[2.4rem] text-[#737373]">
            Profile picture
          </span>
          <input
            type="file"
            name="image"
            id="image"
            className="hidden"
            accept="image/jpg, image/png"
          />
          <div className="flex w-full items-center gap-[2.4rem]">
            <label
              htmlFor="image"
              className="flex flex-col items-center gap-[0.8rem] rounded-[1.2rem] bg-[#efebff] px-12 py-24"
            >
              <img
                src="./icon-upload-image.svg"
                alt="upload image"
                className="w-[4rem]"
              />
              <span className="text-[1.6rem] font-semibold leading-[2.4rem] text-[#633cff]">
                + Upload Image
              </span>
            </label>
            <p className="w-[21.5rem] text-[1.2rem] leading-[1.8rem] text-[#737373]">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </p>
          </div>
        </div>
        <div className="space-y-[1.2rem] p-8">
          <div className="flex items-center gap-[1.6rem]">
            <label
              htmlFor="firstName"
              className="w-[24rem] text-[1.6rem] leading-[2.4rem] text-[#737373]"
            >
              First name*
            </label>
            <div className="relative flex w-full">
              <input
                type="text"
                placeholder="e.g. John"
                id="firstName"
                className={`w-full rounded-[0.8rem] border border-solid bg-white px-6 py-5 text-[1.6rem] leading-[2.4rem] text-[#333] outline-none focus:shadow-purple-sh  disabled:cursor-not-allowed disabled:bg-[#ccc] ${errors.firstName?.message ? "border-[#ff3939]" : "border-[#d9d9d9] caret-[#633cff] focus:border-[#633cff] "}`}
                {...register("firstName", {
                  required: "Can’t be empty",
                })}
                // disabled={isSigningUp}
              />
              {errors.firstName?.message && (
                <p className="absolute right-[2.5%] top-[40%] text-[1.2rem] leading-[1.8rem] text-[#ff3939]">
                  {errors.firstName.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-[1.6rem]">
            <label
              htmlFor="lastName"
              className="w-[24rem] text-[1.6rem] leading-[2.4rem] text-[#737373]"
            >
              Last name*
            </label>
            <div className="relative flex w-full">
              <input
                type="text"
                placeholder="e.g. Appleseed"
                id="lastName"
                className={`w-full rounded-[0.8rem] border border-solid bg-white px-6 py-5 text-[1.6rem] leading-[2.4rem] text-[#333] outline-none focus:shadow-purple-sh  disabled:cursor-not-allowed disabled:bg-[#ccc] ${errors.lastName?.message ? "border-[#ff3939]" : "border-[#d9d9d9] caret-[#633cff] focus:border-[#633cff] "}`}
                {...register("lastName", {
                  required: "Can’t be empty",
                })}
                // disabled={isSigningUp}
              />
              {errors.lastName?.message && (
                <p className="absolute right-[2.5%] top-[40%] text-[1.2rem] leading-[1.8rem] text-[#ff3939]">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-[1.6rem]">
            <label
              htmlFor="email"
              className="w-[24rem] text-[1.6rem] leading-[2.4rem] text-[#737373]"
            >
              Email
            </label>
            <div className="relative flex w-full">
              <input
                type="text"
                placeholder="e.g. John"
                id="email"
                className={`w-full rounded-[0.8rem] border border-solid border-[#d9d9d9] bg-white px-6 py-5 text-[1.6rem] leading-[2.4rem] text-[#333] caret-[#633cff]  outline-none focus:border-[#633cff] focus:shadow-purple-sh disabled:cursor-not-allowed disabled:bg-[#ddd] `}
                disabled={true}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfileDetails;
