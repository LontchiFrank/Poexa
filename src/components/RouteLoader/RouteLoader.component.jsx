import React from "react";
import load from "../../assert/load1.svg";

function RouteLoader() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={load} />
      Loading...
    </div>
  );
}

export default RouteLoader;
