import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoptionNames } from "./types";

function useHeaderOptions() {
  return useQuery<IoptionNames[]>({
    queryKey: ["header-options"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:8000/headerOptionNames"
      );

      return data as IoptionNames[];
    },
  });
}

export default useHeaderOptions;
