import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { ReturnManyResponse } from "./models/response";
import { TraderCard } from "./models/trader";
import { traderAPI } from "./host";

export function fetchTopTraders(forceRefresh = false, topAmount = 10) {
  const url =
    traderAPI +
    `?force_refresh=${forceRefresh ? "true" : "false"}` +
    `&top_n=${topAmount}`;
  return useQuery<ReturnManyResponse<TraderCard>>({
    queryKey: ["top", "traders"],
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    },
  });
}
