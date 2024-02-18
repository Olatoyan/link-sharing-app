import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Logout() {
  const navigate = useNavigate();
  function handleLogout() {
    Cookies.remove("userMail");
    Cookies.remove("jwt");
    Cookies.remove("userId");
    navigate("/login");
    toast.success("Logged out successfully");
  }
  return (
    <button
      className="mobile:px-[1.6rem] flex items-center gap-4 text-[1.6rem] text-[#737373] transition-none hover:text-[#633cff]"
      onClick={handleLogout}
    >
      <CiLogout size={"2rem"} />
      <span className="mobile:hidden">Logout</span>
    </button>
  );
}

export default Logout;
