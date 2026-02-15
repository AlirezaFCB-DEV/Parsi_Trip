import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import IboxShoppingProduct from "../types";

export default function useBoxShoppingProductTwo() {
  return useQuery<IboxShoppingProduct[]>({
    queryKey: ["boxShoppingProductTwo"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:8000/boxShoppingProductTwo",
      );

      return data as IboxShoppingProduct[];
    },
    staleTime: 360000,
    refetchInterval: 365000,
  });
}
