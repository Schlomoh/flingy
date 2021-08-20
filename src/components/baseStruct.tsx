import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { StTextWrapper } from "../components/styledComps";

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
          <Col>
            <h2 style={{ marginTop: "100px" }}>
              {props.title}
              <br />
            </h2>
            <StTextWrapper color={"grey"}>{props.children}</StTextWrapper>
          </Col>
          <Col xl={3} />
        </Row>
        <Row style={{marginTop: '50px'}}>
          <Col xl={2} lg={1} />
          <Col xl={8} lg={10}>
            {props.magicElement}
          </Col>
          <Col xl={2} lg={1} />
        </Row>
      </Container>
    </div>
  );
};
