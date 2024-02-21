import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "../../utils/api";
import toast from "react-hot-toast";

export function useUpdateProfile() {
  const { mutate: updateProfile, isPending: isUpdating } = useMutation({
    mutationFn: (details: {
      firstName: string;
      lastName: string;
      photo: string;
    }) => updateUserProfile(details),
    onSuccess: () => {
      toast.success("Profile updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateProfile, isUpdating };
}
