import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page_List } from "./ArrayListPage";
import NotFound from "../Pages/NotFound";
import { DefaultLayout } from "../Layouts";
import { LoginForm } from "../Pages/Login/LoginForm";
import React from "react";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {Page_List.map(({ route, component }) => (
          <Route key={route} path={route} element={component} />
        ))}
      </Route>
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
