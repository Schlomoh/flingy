import React from "react";
import { useEffect, useState } from "react";
import {
  StPopIn,
  StTextWrapper,
  StOverlay,
  StButton,
  StIcon,
} from "./styledComps";
import { StBasePage } from "../BaseStyle";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { BsChevronCompactDown } from "react-icons/bs";

// Fading in the child elements when the render
export const FadeIn = ({ children, slow }: any) => {
  const [vis, setVis] = useState(false);
  let dur = slow ? "3s" : "1s";
  let detailStyle: any = vis
    ? { visibility: "visible", opacity: 1, transition: `all ${dur}` }
    : { visibility: "hidden", opacity: 0, transition: `all ${dur}` };
  useEffect(() => {
    setVis(true);
    return () => setVis(false);
  }, [vis]);
  return <div style={detailStyle}>{children}</div>;
};

export const OL: any = (props: any) => {
  return (
    <StBasePage>
      <StOverlay show={true}>
        <Link to="/">
          <StButton fixed style={{ margin: "20px" }} size="small">
            Close
          </StButton>
        </Link>
        <StTextWrapper>{props.el}</StTextWrapper>
      </StOverlay>
    </StBasePage>
  );
};

export const PopIn: any = (props: any) => {
  return (
    <div
      onClick={() => props.toggle()}
      style={{
        width: "100vw",
        height: "100vh",
        left: 0,
        top: 0,
        position: "fixed",
        zIndex: 13,
        transition: "background-color 1s, visibility 1s",
        backgroundColor: props.show ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0)",
        visibility: props.show ? "visible" : "hidden",
      }}
    >
      <StPopIn show={props.show}>
        <Container style={{ padding: "0 30px" }}>
          <Row>
            <Col>
              <StTextWrapper align="center">
                <StIcon onClick={() => props.toggle()} color="grey">
                  <BsChevronCompactDown />
                </StIcon>
              </StTextWrapper>
            </Col>
          </Row>
          <Row>
            <Col>
              <StTextWrapper color="grey" fat style={{ paddingTop: "25px" }}>
                {props.heading}
                {props.text}
                {props.result}
              </StTextWrapper>
            </Col>
          </Row>
        </Container>
      </StPopIn>
    </div>
  );
};
