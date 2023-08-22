import { useLocation, useParams, useSearchParams } from "@remix-run/react";
import React from "react";

export default function ShareHandler() {
  const params = useSearchParams();
  const location = useLocation();
  console.log("🚀 ~ ShareHandler ~ params:", params[0]);

  // some nice UI that displays the url in the params object
  return (
    <div>
      <h1>Share</h1>
      <p>URL: {location.search}</p>
      {/* <p>{JSON.stringify(params)}</p>
      <p>{JSON.stringify(location)}</p> */}
      {/* <p>{location.search}</p> */}
    </div>
  );
}
