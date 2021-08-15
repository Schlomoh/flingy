import { useEffect, useState } from "react";

// Fading in the child elements when the render
export const FadeIn = ({ children }: any) => {
  const [vis, setVis] = useState(false);
  let detailStyle: any = vis
    ? { visibility: "visible", opacity: 1, transition: "all 1s" }
    : { visibility: "hidden", opacity: 0, transition: "all 1s" };
  useEffect(() => {
    setVis(true);
    return () => setVis(false);
  }, [vis]);
  return <div style={detailStyle}>{children}</div>;
};
