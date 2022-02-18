import { Col, Container, Row } from "react-grid-system";
import { OL } from "../components/globalComponents";
import { StTextWrapper } from "../components/styledComps";
import { PrivacyText } from "../components/PrivacyText";

export function Privacy(): JSX.Element {
  return (
    <>
      <OL>
        <Container>
          <Row>
            <Col md={2} />
            <Col md={8}>
              <StTextWrapper>
                <PrivacyText />
              </StTextWrapper>
            </Col>
            <Col md={2} />
          </Row>
        </Container>
      </OL>
    </>
  );
}
