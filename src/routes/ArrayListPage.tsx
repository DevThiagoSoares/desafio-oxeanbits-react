import React from "react";
import HouseIcon from "@mui/icons-material/House";
import { Home } from "../Pages/home";
import { LoginForm } from "../Pages/Login/LoginForm";
export interface pageProps {
  title: string;
  route: string;
  icon: any;
  component: any;
  showMenu: boolean;
}

export const Page_List: pageProps[] = [
  {
    title: "Inicio",
    route: "/",
    icon: <HouseIcon />,
    component: <LoginForm />,
    showMenu: false,
  },
  {
    title: "Feed",
    route: "/feed",
    icon: <HouseIcon />,
    component: <Home />,
    showMenu: false,
  },
];
