import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import IboxShoppingProduct from "../types";

export default function useBoxShoppingProductOne() {
  return useQuery<IboxShoppingProduct[]>({
    queryKey: ["boxShoppingProductOne"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:8000/boxShoppingProductOne",
      );

      return data as IboxShoppingProduct[];
    },
    staleTime: 360000,
    refetchInterval: 365000,
  });
}
