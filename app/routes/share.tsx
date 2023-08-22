import { useParams } from "@remix-run/react";
import React from "react";

export default function ShareHandler() {
  const params = useParams();
  console.log("🚀 ~ ShareHandler ~ params:", params);

  // some nice UI that displays the url in the params object
  return (
    <div>
      <h1>Share</h1>
      <p>URL: {params.url}</p>
      <p>{JSON.stringify(params)}</p>
    </div>
  );
}
