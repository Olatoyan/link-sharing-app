import { useQuery } from "@tanstack/react-query";
import { getUsersLink } from "../../utils/api";

export function useUserLink() {
  const { data: user, isPending: isFetching } = useQuery({
    queryKey: ["user"],
    queryFn: getUsersLink,
    retry: false,
  });

  return { user, isFetching };
}
