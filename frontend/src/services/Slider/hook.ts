"use client";

import { useQuery } from "@tanstack/react-query";
import { Islide } from "./types";
import axios from "axios";

function useSlider() {
  return useQuery<Islide[]>({
    queryKey: ["slider"],

    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/slider");

      return data as Islide[];
    },
  });
}

export default useSlider;
