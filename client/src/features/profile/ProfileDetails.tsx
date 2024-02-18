import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import Cookie from "js-cookie";
import { useUserContext } from "../../contexts/UserProfileContext";
import { IoImageOutline } from "react-icons/io5";

type FormData = {
  firstName: string;
  lastName: string;
};
type ProfileDetailsProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  isUpdating: boolean;
  onSubmitData: (data: FormData) => void;
};

function ProfileDetails({
  register,
  errors,
  handleSubmit,
  isUpdating,
  onSubmitData,
}: ProfileDetailsProps) {
  const { updatePhoto, photo, firstName, lastName } = useUserContext();

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoto = event.target.files![0];

    const reader = new FileReader();
    reader.readAsDataURL(newPhoto);
    reader.onloadend = () => {
      updatePhoto(reader.result as string);
    };
  };

  const UserMail = Cookie.get("userMail");

  return (
    <div className="border-b border-solid border-[#d9d9d9] bg-white p-16 pb-0">
      <h1 className="mobile:text-[2.4rem] mobile:leading-[3.6rem] pb-[0.8rem] text-[3.2rem] font-bold leading-[4.8rem] text-[#333]">
        Profile Details
      </h1>
      <p className="text-[1.6rem] leading-[2.4rem] text-[#737373]">
        Add your details to create a personal touch to your profile.
      </p>

      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className="mobile:flex-col mobile:items-stretch flex items-center justify-between gap-[1.6rem] p-8">
          <span className="w-[24rem] text-[1.6rem] leading-[2.4rem] text-[#737373]">
            Profile picture
          </span>
          <input
            type="file"
            name="image"
            id="image"
            className="hidden"
            accept="image/jpg, image/png"
            onChange={handlePhotoChange}
          />
          <div className="mobile:items-stretch mobile:flex-col flex w-full items-center gap-[2.4rem]">
            <label
              htmlFor="image"
              className={`flex w-[19.2rem] cursor-pointer flex-col items-center gap-[0.8rem] rounded-[1.2rem] bg-[#efebff] bg-cover bg-center px-12 py-24 ${photo ? "text-white" : "text-[#633cff]"}`}
              style={{
                backgroundImage: photo
                  ? `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${photo})`
                  : "",
              }}
            >
              <IoImageOutline size={"4rem"} />
              <span className="text-[1.6rem] font-semibold leading-[2.4rem]">
                + Upload Image
              </span>
            </label>
            <p className="mobile:w-full w-[21.5rem] text-[1.2rem] leading-[1.8rem] text-[#737373]">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </p>
          </div>
        </div>
        <div className="space-y-[1.2rem] p-8">
          <div className="mobile:flex-col mobile:items-start mobile:gap-2 flex items-center gap-[1.6rem]">
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
                defaultValue={firstName}
                className={`w-full rounded-[0.8rem] border border-solid bg-white px-6 py-5 text-[1.6rem] leading-[2.4rem] text-[#333] outline-none focus:shadow-purple-sh  disabled:cursor-not-allowed disabled:bg-[#ccc] ${errors.firstName?.message ? "border-[#ff3939]" : "border-[#d9d9d9] caret-[#633cff] focus:border-[#633cff] "}`}
                {...register("firstName", {
                  required: "Can’t be empty",
                  minLength: {
                    value: 3,
                    message: "Must be at least 3 characters",
                  },
                })}
                disabled={isUpdating}
              />
              {errors.firstName?.message && (
                <p className="absolute right-[2.5%] top-[40%] text-[1.2rem] leading-[1.8rem] text-[#ff3939]">
                  {errors.firstName.message}
                </p>
              )}
            </div>
          </div>
          <div className="mobile:flex-col mobile:items-start mobile:gap-2 flex items-center gap-[1.6rem]">
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
                defaultValue={lastName}
                className={`w-full rounded-[0.8rem] border border-solid bg-white px-6 py-5 text-[1.6rem] leading-[2.4rem] text-[#333] outline-none focus:shadow-purple-sh  disabled:cursor-not-allowed disabled:bg-[#ccc] ${errors.lastName?.message ? "border-[#ff3939]" : "border-[#d9d9d9] caret-[#633cff] focus:border-[#633cff] "}`}
                {...register("lastName", {
                  required: "Can’t be empty",
                  minLength: {
                    value: 3,
                    message: "Must be at least 3 characters",
                  },
                })}
                disabled={isUpdating}
              />
              {errors.lastName?.message && (
                <p className="absolute right-[2.5%] top-[40%] text-[1.2rem] leading-[1.8rem] text-[#ff3939]">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="mobile:flex-col mobile:items-start mobile:gap-2 flex items-center gap-[1.6rem]">
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
                value={UserMail}
                className={`w-full rounded-[0.8rem] border border-solid border-[#d9d9d9] bg-white px-6 py-5 text-[1.6rem] leading-[2.4rem] text-[#333] caret-[#633cff]  outline-none focus:border-[#633cff] focus:shadow-purple-sh disabled:cursor-not-allowed disabled:bg-[#ddd] `}
                disabled={true}
              />
            </div>
          </div>
        </div>
        <button></button>
      </form>
    </div>
  );
}

export default ProfileDetails;
