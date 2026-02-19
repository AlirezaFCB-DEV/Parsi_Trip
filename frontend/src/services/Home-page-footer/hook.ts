import { useQuery } from "@tanstack/react-query";
import IhomePageFooterItem from "./types";
import axios from "axios";

export default function useHomePageFooter() {
  return useQuery<IhomePageFooterItem[]>({
    queryKey: ["HomePageFooter"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/homePageFooter");

      return data as IhomePageFooterItem[];
    },
    staleTime: 360000,
    refetchInterval: 365000,
  });
}
