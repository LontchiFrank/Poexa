import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const [authenticated, setauthenticated] = useState(null);
  const auth = useSelector((data) => data.user?.authenticate);
  console.log(auth);
  useEffect(() => {
    if (auth) {
      setauthenticated(auth);
    }
  }, [authenticated]);

  if (!authenticated) {
    <h1>OOps Sorry not authenticated</h1>;
  } else {
    return (
      <div>
        <h1>Welcome to the dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
