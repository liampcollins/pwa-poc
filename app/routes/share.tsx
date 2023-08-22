import { useLocation, useSearchParams } from "@remix-run/react";
import React from "react";

export default function ShareHandler() {
  const params = useSearchParams();
  const location = useLocation();
  console.log("🚀 ~ ShareHandler ~ params:", params[0]);

  // some nice UI that displays the url in the params object
  return (
    <div style={{ padding: 5 }}>
      <h1>URL RECEIVED: {(location.search || "").split("?text=")[1]}</h1>
    </div>
  );
}
