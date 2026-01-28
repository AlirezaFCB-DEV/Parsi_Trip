import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import IboxShoppingProduct from "./types";

export default function useBoxShoppingProducts() {
  return useQuery<IboxShoppingProduct[]>({
    queryKey: ["boxShoppingProducts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:8000/boxShoppingProducts",
      );

      return data as IboxShoppingProduct[];
    },
  });
}
