import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import IboxShoppingProduct from "../types";

export default function useBoxShoppingProductFive() {
  return useQuery<IboxShoppingProduct[]>({
    queryKey: ["boxShoppingProductFive"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:8000/boxShoppingProductFive",
      );

      return data as IboxShoppingProduct[];
    },
  });
}
