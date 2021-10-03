import { Row, Col } from "react-grid-system";

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
