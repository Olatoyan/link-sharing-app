import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { HiOutlineLink } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import Logout from "./Logout";
import Cookies from "js-cookie";
import { useUserLink } from "../features/links/useUserLink";
import { useGetUserProfile } from "../features/profile/useGetUserProfile";
import { useCreateUserLink } from "../features/links/useCreateUserLink";
import { useUpdateProfile } from "../features/profile/useUpdateProfile";
import { useLogout } from "./useLogout";
import TransparentLoader from "./TransparentLoader";

function ProfileHeader() {
  const { isFetching } = useUserLink();
  const { isPending } = useGetUserProfile();
  const { isCreating } = useCreateUserLink();

  const { isUpdating } = useUpdateProfile();
  const { isLogoutPending } = useLogout();

  const location = useLocation();

  const [pathname, setPathname] = useState(location.pathname);
  const userId = Cookies.get("userId");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <header className="relative flex items-center justify-between bg-white px-[2.4rem] py-[2.4rem]">
      <Logo />

      <div className="flex items-center gap-[1.6rem] tablet:gap-4">
        <Link
          to="/add-links"
          className={`flex items-center gap-[0.8rem] rounded-[0.8rem] px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] mobile:px-[1.6rem] ${pathname === "/add-links" ? "bg-[#efebff] text-[#633cff]" : "text-[#737373] hover:text-[#633cff]"}`}
        >
          <HiOutlineLink size={"2rem"} />
          <p className="mobile:hidden">Links</p>
        </Link>
        <Link
          to="/profile"
          className={`flex items-center gap-[0.8rem] rounded-[0.8rem] px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] text-[#633cff] mobile:px-[1.6rem] ${pathname === "/profile" ? "bg-[#efebff] text-[#633cff]" : "text-[#737373] hover:text-[#633cff]"}`}
        >
          <FaRegUserCircle size={"2rem"} />
          <p className="mobile:hidden">Profile Details</p>
        </Link>
      </div>

      <div className="flex items-center gap-8 tablet:gap-4">
        <Logout />
        <Link
          to={`/preview/${userId}`}
          className="rounded-[0.8rem] border border-solid border-[#633cff] px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] text-[#633cff] transition-all duration-300 hover:bg-[#efebff] mobile:px-[1.6rem]"
        >
          <img
            src="./icon-preview-header.svg"
            alt="preview header"
            className="hidden mobile:block"
          />
          <span className="mobile:hidden">Preview</span>
        </Link>
      </div>

      {(isFetching ||
        isCreating ||
        isUpdating ||
        isPending ||
        isLogoutPending) && <TransparentLoader />}
    </header>
  );
}

export default ProfileHeader;
