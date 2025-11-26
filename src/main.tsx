import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import { GetStartLN } from "./components/GetStartLN";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ResumeInputeBuilder } from "./components/ResumeInputeBuilder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/GetStartLN",
    element: <GetStartLN />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/ResumeInputeBuilder",
    element: <ResumeInputeBuilder />,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
