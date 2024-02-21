import { CiLogout } from "react-icons/ci";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout } = useLogout();

  function handleLogout() {
    logout();
  }
  return (
    <button
      className="flex items-center gap-4 text-[1.6rem] text-[#737373] transition-none hover:text-[#633cff] mobile:px-[1.6rem]"
      onClick={handleLogout}
    >
      <CiLogout size={"2rem"} />
      <span className="mobile:hidden">Logout</span>
    </button>
  );
}

export default Logout;
