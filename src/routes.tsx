import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home
      }
    ]
  }
])

export default router;
