import { useQuery } from "@tanstack/react-query";
import { getOfflineUserProfile } from "../utils/api";
import { useParams } from "react-router-dom";

export function useGetOfflineUser() {
  const { id } = useParams();
  const { data: offlineUser, isPending: isOfflineUserPending } = useQuery({
    queryKey: ["offlineUser"],
    queryFn: () => getOfflineUserProfile(id!),
  });

  console.log({ offlineUser });
  return { offlineUser, isOfflineUserPending };
}
