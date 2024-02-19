import { useMutation } from "@tanstack/react-query";
import { createUserLink as createUserLinkApi } from "../../utils/api";
import toast from "react-hot-toast";

export function useCreateUserLink() {
  const { mutate: createUserLink, isPending: isCreating } = useMutation({
    mutationFn: (details: {
      id: number;
      name: string;
      link: string;
      user: string;
    }) => createUserLinkApi(details),
    onSuccess: () => {
      toast.success("Your link(s) has been saved!");
    },
  });

  return { createUserLink, isCreating };
}
