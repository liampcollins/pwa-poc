import { useParams } from "@remix-run/react";
import React from "react";

export default function ShareHandler() {
  const params = useParams();
  console.log("🚀 ~ ShareHandler ~ params:", params);
  return <div>ShareHandler</div>;
}
