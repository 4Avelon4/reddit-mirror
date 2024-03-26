import React from 'react';
import { Navigate, useRoutes } from "react-router-dom";
import { CardsList } from "../shared/CardsList";
import { RouteObject } from "react-router-dom";
import { NotFoundPage } from "../shared/NotFoundPage";
import { Post } from "../shared/Post";

export const routes: RouteObject[] = [
  {
    path: '/auth',
    element: <Navigate to='/posts' replace/>,
  },
  {
    path: '/posts',
    element: <CardsList/>,
    children: [
      { path: ':id', element: <Post/>}
    ]
  },
  {
    path: '*',
    element: <NotFoundPage/>,
  }
];

export function Router() {
  const router = useRoutes(routes);

  return router;
}
