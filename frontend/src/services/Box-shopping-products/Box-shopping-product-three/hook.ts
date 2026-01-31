import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import IboxShoppingProduct from "../types";

export default function useBoxShoppingProductThree() {
  return useQuery<IboxShoppingProduct[]>({
    queryKey: ["boxShoppingProductThree"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:8000/boxShoppingProductThree",
      );

      return data as IboxShoppingProduct[];
    },
  });
}
