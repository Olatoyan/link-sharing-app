import { useQuery } from "@tanstack/react-query";
import { getOfflineUserLinks } from "../utils/api";
import { useParams } from "react-router-dom";

export function useGetOfflineLinks() {
  const { id } = useParams();
  const { data: offlineLinks, isPending: isOfflineLinksPending } = useQuery({
    queryKey: ["offlineLinks", id],
    queryFn: () => getOfflineUserLinks(id!),
    retry: false,
  });

  console.log({ offlineLinks });
  return { offlineLinks, isOfflineLinksPending };
}
