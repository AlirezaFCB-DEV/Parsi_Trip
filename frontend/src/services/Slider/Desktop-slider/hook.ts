import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IdesktopSlide } from "./types";

export default function useDesktopSlider() {
  return useQuery<IdesktopSlide[]>({
    queryKey: ["desktop-slider"],
    queryFn: async () => {
      const { data } = await axios("http://localhost:8000/desktopSlider");

      return data as IdesktopSlide[];
    },
    staleTime: 360000,
    refetchInterval: 365000,
  });
}
