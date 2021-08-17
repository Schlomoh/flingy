import React from "react";
import { useEffect, useState } from "react";

// Fading in the child elements when the render
export const FadeIn = ({ children, duration }: any) => {
  const [vis, setVis] = useState(false);
  let dur = duration === "slow" ? "3s" : "1s";
  let detailStyle: any = vis
    ? { visibility: "visible", opacity: 1, transition: `all ${dur}` }
    : { visibility: "hidden", opacity: 0, transition: `all ${dur}` };
  useEffect(() => {
    setVis(true);
    return () => setVis(false);
  }, [vis]);
  return <div style={detailStyle}>{children}</div>;
};
