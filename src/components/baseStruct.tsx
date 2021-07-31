import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { StTextWrapper } from "../pages/Home";

interface overlayProps {
  children: any;
  magicElement: any;
  title: String;
}

export const BaseOLStruct: React.FC<overlayProps> = (props) => {
  return (
    <div style={{ padding: "0 30px 48px 30px" }}>
      <Container>
        <Row>
          <Col xl={3} />
          <Col xl={6}>
            <h2 style={{ marginTop: "100px" }}>
              {props.title}
              <br />
            </h2>
            <StTextWrapper color={"grey"}>{props.children}</StTextWrapper>
          </Col>
          <Col xl={3} />
        </Row>
        <Row>
          <Col xl={3} />
          <Col>{props.magicElement}</Col>
          <Col xl={3} />
        </Row>
      </Container>
    </div>
  );
};
