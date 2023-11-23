import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

export function QueryProvider(props: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={client}>{props.children}</QueryClientProvider>
  );
}
