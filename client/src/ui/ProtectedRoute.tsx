import { ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const jwt = Cookies.get("jwt");
  console.log(jwt);
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt) {
      navigate("/login");
      // setTimeout(() => {
      //   toast.error("You need to be logged in to view this page");
      // }, 0);
      toast.error("You need to be logged in to view this page");
    }
  }, [jwt, navigate]);

  return <>{children}</>;
}

export default ProtectedRoute;
