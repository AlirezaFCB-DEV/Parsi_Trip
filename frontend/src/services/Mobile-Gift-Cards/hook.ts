import { useQuery } from "@tanstack/react-query";
import IgiftCarditem from "./types";
import axios from "axios";

export default function useMobileGiftCards() {
  return useQuery<IgiftCarditem[]>({
    queryKey: ["mobileGiftCards"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/mobileGiftCards");

      return data as IgiftCarditem[];
    },
  });
}
