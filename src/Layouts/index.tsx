import { Outlet } from "react-router-dom";
import React from "react";
import { Navbar } from "../Components/Navbar/miniDrawer";

export function DefaultLayout() {
  return (
    <>
      <Navbar>
        <Outlet />
      </Navbar>
    </>
  );
}
