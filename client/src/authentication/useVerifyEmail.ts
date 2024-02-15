import { useMutation } from "@tanstack/react-query";
import { verifyEmail } from "../utils/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useVerifyEmail() {
  const navigate = useNavigate();
  const { mutate: verifyEmailFn, isPending: isVerifying } = useMutation({
    mutationFn: (token: string) => verifyEmail(token),
    onSuccess: () => {
      toast.success("Email verified successfully. You can log in now.");
      navigate("/login");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
      navigate("/signup");
    },
  });

  return { verifyEmailFn, isVerifying };
}
