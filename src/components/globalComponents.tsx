import React from "react";
import { useEffect, useState } from "react";
import {
  StPopIn,
  StTextWrapper,
  StOverlay,
  StButton,
  StIcon,
  stdBlue,
} from "./styledComps";
import { StBasePage } from "../BaseStyle";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { BsChevronCompactDown } from "react-icons/bs";

// Fading in the child elements when the render
export const FadeIn = ({ children, slow }: any) => {
  const [vis, setVis] = useState(false);
  let dur = slow ? "2s" : "1s";
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
  const MessageField = ({ children }: any) => {
    return (
      <div className="textField">
        <p className="message">{children}</p>
        <p className="littleText">Delivered</p>
      </div>
    );
  };

  return (
    <StPopIn show={props.show}>
      <Container>
        <Row>
          <Col lg={2} sm={1} />
          <Col lg={8} sm={10} id="DetailPopIn">
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
                  <StTextWrapper
                    color="grey"
                    fat
                    style={{ paddingTop: "25px" }}
                  >
                    {props.heading}
                  </StTextWrapper>
                  <StTextWrapper color="grey">{props.text}</StTextWrapper>
                  <FadeIn slow>
                    <MessageField>{props.result.message}</MessageField>
                  </FadeIn>
                  <StTextWrapper fat color="grey">
                    <p style={{ marginBottom: "20px" }}>
                      This Person is{" "}
                      <strong style={{ color: stdBlue }}>
                        {props.result.rvalue}%{" "}
                      </strong>
                      likely to respond.
                    </p>
                  </StTextWrapper>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={2} sm={1} />
        </Row>
      </Container>
    </StPopIn>
  );
};
