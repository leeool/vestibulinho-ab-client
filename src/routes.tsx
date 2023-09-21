import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import Blog from "./pages/Blog/Blog";
import PostPage from "./pages/PostPage/PostPage";

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
        Component: Blog
      },
      {
        path: "/cursos",
        Component: Cursos
      },
      {
        path: "/cursopage",
        Component: CursoPage
      },
      {
        path: "/blog/:id",
        Component: PostPage
      }
    ]
  }
])

export default router;
