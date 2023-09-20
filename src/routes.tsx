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
      },
      {
        path: "/blog",
        Component: () => <div>blog</div>
      }
    ]
  }
])

export default router;
