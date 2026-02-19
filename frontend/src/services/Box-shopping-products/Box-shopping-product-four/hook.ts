import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import IboxShoppingProduct from "../types";

export default function useBoxShoppingProductFour() {
  return useQuery<IboxShoppingProduct[]>({
    queryKey: ["boxShoppingProductFour"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:8000/boxShoppingProductFour",
      );

      return data as IboxShoppingProduct[];
    },
    staleTime: 360000,
    refetchInterval: 365000,
  });
}
