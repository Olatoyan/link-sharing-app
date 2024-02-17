import { useMutation } from "@tanstack/react-query";
import { createUserLink as createUserLinkApi } from "../../utils/api";

export function useCreateUserLink() {
  const { mutate: createUserLink, isPending: isCreating } = useMutation({
    mutationFn: (details: { name: string; link: string; user: string }) =>
      createUserLinkApi(details),
  });

  return { createUserLink, isCreating };
}
