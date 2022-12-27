import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RouteLoader } from "../components";
import { routes } from "./routes";

function MainNavigation() {
  return (
    <Router>
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          {routes.map((route) => {
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />;
          })}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default MainNavigation;
