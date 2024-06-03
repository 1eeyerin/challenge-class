import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import DefaultLayout from "../components/layout/DefaultLayout";
import Detail from "../pages/detail";
import Todo from "../pages/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products/:productId",
        element: <Detail />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);

export default router;
