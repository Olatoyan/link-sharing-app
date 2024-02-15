import { useMutation } from "@tanstack/react-query";
import { login } from "../utils/api";
import toast from "react-hot-toast";

export function useLogin() {
  const { mutate: loginFn, isPending: isLoggingIn } = useMutation({
    mutationFn: (details: { email: string; password: string }) =>
      login(details),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return { loginFn, isLoggingIn };
}
