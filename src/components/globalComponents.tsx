import { useEffect, useState } from "react";
import { StTextWrapper, StOverlay, StButton } from "./StyledComps";
import { Link } from "react-router-dom";
import { Row, Col } from "react-grid-system";
import darkPattern from "../assets/email-pattern.png";
import lightPattern from "../assets/email-pattern-light.png";

export const emoji = (cp: any) => String.fromCodePoint(cp);

//responsive column layout
export const CenterPageRow: any = ({ children }: any) => {
  return (
    <Row>
      <Col xl={4} md={3} sm={2} />
      <Col xl={4} md={6} sm={8}>
        {children}
      </Col>
      <Col xl={4} md={3} sm={2} />
    </Row>
  );
};

// Fading in the child elements on render
export const FadeIn = ({ children, slow, fast, grow }: any) => {
  const [vis, setVis] = useState(false);
  const [el, setEl]: any = useState();
  let dur = slow ? "2s" : fast ? ".5s" : "1s";
  let detailStyle: any = vis
    ? !grow
      ? { visibility: "visible", opacity: 1, transition: `all ${dur}` }
      : {
          visibility: "visible",
          height: el.clientHeight,
          transition: `all ${dur} cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
        }
    : !grow
    ? { visibility: "hidden", opacity: 0, transition: `all ${dur}` }
    : {
        visibility: "hidden",
        height: 0,
        transition: `all ${dur} cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
      };
  useEffect(() => {
    setVis(true);
    if (!el) setEl(document.getElementById("textMessage"));
    return () => setVis(false);
  }, [vis, el]);
  return <div style={detailStyle}>{children}</div>;
};

// acts as the base for the starter and reply pages
export const OL: any = (props: any) => {
  const pattern = props.nsfw ? lightPattern : darkPattern;
  return (
      <StOverlay nsfw={props.nsfw} bgImgSrc={pattern} show={true}>
        <Link to="/">{!props.noClose ?
          <StButton
            className="noSelect"
            fixed
            style={{ margin: "10px 15px 0 0" }}
            size="small"
            color={props.nsfw ? "rgb(50,50,50)" : "lightgrey"}
          >
            Close
          </StButton>: null}
        </Link>
        <StTextWrapper>{props.children}</StTextWrapper>
      </StOverlay>
  );
};
