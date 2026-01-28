"use client";

import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { ImobileSlide } from "./types";

function useSlider() {
  return useQuery<ImobileSlide[]>({
    queryKey: ["slider"],

    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/mobileSlider");

      return data as ImobileSlide[];
    },
  });
}

export default useSlider;
