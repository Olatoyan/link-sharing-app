import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyEmail } from "./useVerifyEmail";
import toast from "react-hot-toast";
function VerifyEmailSection() {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const { verifyEmailFn } = useVerifyEmail();

  useEffect(() => {
    if (token)
      verifyEmailFn(token, {
        onSuccess: () => {
          toast.success("Email verified successfully. You can log in now.");
          navigate("/login");
        },
      });
  }, [token, verifyEmailFn, navigate]);

  function verify() {
    if (token) {
      verifyEmailFn(token);
    }
  }

  return (
    <div className="cursor-pointer" onClick={verify}>
      {/* click here to verify your email address */}
    </div>
  );
}

export default VerifyEmailSection;
