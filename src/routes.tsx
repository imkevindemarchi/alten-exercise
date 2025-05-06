import { ReactNode } from "react";

// Pages
import { Home, User } from "./pages";

export interface IRoute {
  path: string;
  element: ReactNode;
}

export const ROUTES: IRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/users/:userId", element: <User /> },
];
