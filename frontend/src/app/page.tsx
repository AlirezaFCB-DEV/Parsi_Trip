"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Home() {

  return (
    <QueryClientProvider client={new QueryClient()}>
      <h1>hello world</h1>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
