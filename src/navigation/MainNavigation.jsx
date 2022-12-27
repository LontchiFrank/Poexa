import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RouteLoader } from "../components";

const Main = lazy(() => import("../pages/Main/Main.screen"));
const Login = lazy(() => import("../pages/Login/Login.screen"));
const Register = lazy(() => import("../pages/Register/Register.screen"));

function MainNavigation() {
  return (
    <Router>
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default MainNavigation;
