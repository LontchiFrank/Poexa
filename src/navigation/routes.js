import { lazy } from "react";
import { path } from "./paths";

export const routes = [
  {
    path: path.Main,
    component: lazy(() => import("../pages/Main/Main.screen")),
  },
  {
    path: path.REGISTER,
    component: lazy(() => import("../pages/Register/Register.screen")),
  },
  {
    path: path.LOGIN,
    component: lazy(() => import("../pages/Login/Login.screen")),
  },
];
