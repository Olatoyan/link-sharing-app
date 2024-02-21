import { useMutation } from "@tanstack/react-query";
import { createUserLink as createUserLinkApi } from "../../utils/api";
import { LinkProps } from "../../contexts/LinksContext";

export function useCreateUserLink() {
  const { mutate: createUserLink, isPending: isCreating } = useMutation({
    mutationFn: (details: LinkProps[]) => createUserLinkApi(details),
  });

  return { createUserLink, isCreating };
}
