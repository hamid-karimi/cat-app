import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import { Suspense } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const ProviderManager = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<p> Loading...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
};
