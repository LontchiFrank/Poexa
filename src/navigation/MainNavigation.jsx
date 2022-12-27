import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function MainNavigation() {
  return (
    <Router>
      <Suspense>
        <Routes></Routes>
      </Suspense>
    </Router>
  );
}

export default MainNavigation;
