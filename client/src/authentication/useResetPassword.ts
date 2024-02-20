import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../utils/api";

export function useResetPassword() {
  const { mutate: resetPassword, isPending: isResetting } = useMutation({
    mutationFn: (info: {
      token: string;
      password: string;
      confirmPassword: string;
    }) => resetPasswordApi(info),
  });

  return { resetPassword, isResetting };
}
