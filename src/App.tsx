import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import { Suspense } from "react";
import { ErrorBoundary } from "@/components/FallBack";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<p> Loading...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
