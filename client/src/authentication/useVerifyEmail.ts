import { useMutation } from "@tanstack/react-query";
import { verifyEmail } from "../utils/api";

export function useVerifyEmail() {
  const { mutate: verifyEmailFn, isPending: isVerifying } = useMutation({
    mutationFn: (token: string) => verifyEmail(token),
  });

  return { verifyEmailFn, isVerifying };
}
