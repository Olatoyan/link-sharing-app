function ProfileDetails() {
  return (
    <div>
      <h1 className="pb-[0.8rem] text-[3.2rem] font-bold leading-[4.8rem] text-[#333]">
        Profile Details
      </h1>
      <p className="text-[1.6rem] leading-[2.4rem] text-[#737373]">
        Add your details to create a personal touch to your profile.
      </p>

      <form>
        <div className="flex items-center">
          <span className="text-[1.6rem] leading-[2.4rem] text-[#737373]">
            Profile picture
          </span>
          <input type="file" name="image" id="image" className="hidden" />
          <label
            htmlFor="image"
            className="flex flex-col gap-[0.8rem] rounded-[1.2rem] bg-[#efebff] px-12 py-24"
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
          <p className="text-[1.2rem] leading-[1.8rem] text-[#737373]">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
        </div>
      </form>
    </div>
  );
}

export default ProfileDetails;
