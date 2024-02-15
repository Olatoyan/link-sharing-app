import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../utils/api";
import toast from "react-hot-toast";

export function UseSignup() {
  const { mutate: signUp, isPending: isSigningUp } = useMutation({
    mutationFn: (details: {
      email: string;
      password: string;
      confirmPassword: string;
    }) => signUpApi(details),
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signUp, isSigningUp };
}
