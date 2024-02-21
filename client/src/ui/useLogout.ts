import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../utils/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Logged out successfully");
      navigate("/login");
    },
  });
  return { logout };
}
