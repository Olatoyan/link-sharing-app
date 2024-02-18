import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { HiOutlineLink } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import Logout from "./Logout";
import Cookies from "js-cookie";

function ProfileHeader() {
  const location = useLocation();

  const [pathname, setPathname] = useState(location.pathname);
  const userId = Cookies.get("userId");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <header className="flex items-center justify-between bg-white py-[2.4rem]">
      <Logo />

      <div className="flex items-center gap-[1.6rem]">
        <Link
          to="/add-links"
          className={`flex items-center gap-[0.8rem] rounded-[0.8rem] px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] ${pathname === "/add-links" ? "bg-[#efebff] text-[#633cff]" : "text-[#737373] hover:text-[#633cff]"}`}
        >
          <HiOutlineLink size={"2rem"} />
          <p>Links</p>
        </Link>
        <Link
          to="/profile"
          className={`flex items-center gap-[0.8rem] rounded-[0.8rem] px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] text-[#633cff] ${pathname === "/profile" ? "bg-[#efebff] text-[#633cff]" : "text-[#737373] hover:text-[#633cff]"}`}
        >
          <FaRegUserCircle size={"2rem"} />
          <p>Profile Details</p>
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <Logout />
        <Link
          to={`/preview/${userId}`}
          className="rounded-[0.8rem] border border-solid border-[#633cff] px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] text-[#633cff]"
        >
          Preview
        </Link>
      </div>
    </header>
  );
}

export default ProfileHeader;
