import { RouteObject, useRoutes } from "react-router-dom";
import { Home } from "../pages/home";
import { Details } from "../pages/details";
import { New } from "../pages/new";
import { Edit } from "../pages/edit";
import { Layout } from "./layout";

export function AppRoutes() {
  const Routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/details/:id", element: <Details /> },
        { path: "/new", element: <New /> },
        { path: "/edit/:id", element: <Edit /> },
      ],
    },
  ];

  return useRoutes(Routes);
}
