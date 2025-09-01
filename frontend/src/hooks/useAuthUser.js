
import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

const useAuthUser = () => {
  const token = localStorage.getItem("token"); // or your auth check

  const authUser = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    enabled: !!token, // only run query if token exists
    retry: false,
  });

  return { isLoading: authUser.isLoading, authUser: authUser.data?.user };
};

export default useAuthUser;