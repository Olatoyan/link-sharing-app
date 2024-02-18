import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../utils/api";

export function useGetUserProfile() {
  const { data: userProfile, isPending } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
    retry: false,
  });

  return { userProfile, isPending };
}
