import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../utils/api";

export function UseSignup() {
  const { mutate: signUp, isPending: isSigningUp } = useMutation({
    mutationFn: (details: {
      email: string;
      password: string;
      confirmPassword: string;
    }) => signUpApi(details),
  });

  return { signUp, isSigningUp };
}
