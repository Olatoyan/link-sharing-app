import { Link } from "react-router-dom";
import Logo from "./Logo";
import { HiOutlineLink } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";

function ProfileHeader() {
  return (
    <header className="flex items-center justify-between bg-white py-[2.4rem]">
      <Logo />

      <div className="flex items-center gap-[1.6rem]">
        <Link
          to="/links"
          className="flex items-center gap-[0.8rem] rounded-[0.8rem] bg-[#efebff] px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] text-[#633cff]"
        >
          <HiOutlineLink size={"2rem"} />
          <p>Links</p>
        </Link>
        <Link
          to="/profile"
          className="flex items-center gap-[0.8rem] rounded-[0.8rem] px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] text-[#633cff]"
        >
          <FaRegUserCircle size={"2rem"} />
          <p>Profile Details</p>
        </Link>
      </div>

      <Link
        to="/preview"
        className="rounded-[0.8rem] border border-solid border-[#633cff] px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] text-[#633cff]"
      >
        Preview
      </Link>
    </header>
  );
}

export default ProfileHeader;
