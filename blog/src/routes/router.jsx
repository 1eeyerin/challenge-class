import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layouts";
import { HomePage } from "../pages/HomePage";
import { PostDetailPage } from "../pages/PostDetailPage";
import PostDetailPageLoader from "../pages/PostDetailPage/PostDetailPage.loader";
import { PostsListPage } from "../pages/PostsListPage";
import PostsListPageLoader from "../pages/PostsListPage/PostsListPage.loader";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostsListPage />,
        loader: PostsListPageLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostDetailPage />,
        loader: PostDetailPageLoader,
      },
    ],
  },
]);

export default router;
