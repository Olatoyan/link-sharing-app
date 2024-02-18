import { ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const jwt = Cookies.get("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt || jwt === "undefined") {
      navigate("/login");
      toast.error("You need to be logged in to view this page");
    }
  }, [jwt, navigate]);

  return <>{children}</>;
}

export default ProtectedRoute;
