import { useMutation } from "@tanstack/react-query";
import { login } from "../utils/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: loginFn, isPending: isLoggingIn } = useMutation({
    mutationFn: (details: { email: string; password: string }) =>
      login(details),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Login Successful");
      navigate("/add-links");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return { loginFn, isLoggingIn };
}
