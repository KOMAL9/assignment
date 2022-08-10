import React, { useEffect } from "react";

export const UseEffectHook = () => {
  useEffect(() => {
    console.log("component mounted");
  });

  return <div>I'm UseEffectHook{console.log("render")}</div>;
};