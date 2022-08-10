import React, { useLayoutEffect } from "react";

export const UseLayoutEffectHook = () => {

  useLayoutEffect(() => {
    console.log("component mounted");
  }, []);

  return <div>I'm useLayoutEffect{console.log("render")}</div>;
};