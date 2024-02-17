import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "../../utils/api";
import toast from "react-hot-toast";

export function useUpdateProfile() {
  const { mutate: updateProfile, isPending: isUpdating } = useMutation({
    mutationFn: (details: { firstName: string; lastName: string }) =>
      updateUserProfile(details),
    onSuccess: () => {
      toast.success("Profile updated successfully");
    },
    onError: () => {
      toast.error("First and last name should be more than 3 characters.");
    },
  });

  return { updateProfile, isUpdating };
}
