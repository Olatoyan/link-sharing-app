import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useVerifyEmail } from "./useVerifyEmail";
function VerifyEmailSection() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const { verifyEmailFn } = useVerifyEmail();
  console.log(token);
  useEffect(() => {
    console.log("hello");
    if (token) verifyEmailFn(token);
  }, [token, verifyEmailFn]);

  return <div></div>;
}

export default VerifyEmailSection;
