import { useMutation } from "@tanstack/react-query";
import { forgotPassword as forgotPasswordApi } from "../utils/api";
import toast from "react-hot-toast";

export function useForgotPassword() {
  const { mutate: forgotPassword, isPending: isForgotPasswordLoading } =
    useMutation({
      mutationFn: (email: string) => forgotPasswordApi(email),
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  return { forgotPassword, isForgotPasswordLoading };
}
