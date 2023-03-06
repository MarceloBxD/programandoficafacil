import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./contexts/contextApi";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { router } from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </AppProvider>
  </React.StrictMode>
);
