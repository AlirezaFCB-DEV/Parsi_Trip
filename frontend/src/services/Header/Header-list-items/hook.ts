import { useQuery } from "@tanstack/react-query";
import { IlistItems } from "./types";
import axios from "axios";

function useListItems() {
  return useQuery<IlistItems[]>({
    queryKey: ["header-list-items"],
    queryFn: async () => {
      const { data } = await axios("http://localhost:8000/headerListItems");

      return data as IlistItems[];
    },
  });
}

export default useListItems;
