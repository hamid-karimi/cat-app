import React from "react";
import ReactDOM from "react-dom/client";
import { ProviderManager } from "@/providerManager";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProviderManager />
  </React.StrictMode>
);
