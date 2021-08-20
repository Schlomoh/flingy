import { Row, Col, Container } from "react-grid-system";
import { StBasePage } from "../BaseStyle";

// blues illustrations as react component import
import starter from "../assets/starter.png";
import reply from "../assets/reply.png";

// Declaring the needed styled components
import {
  StCard,
  StImage,
  StTextWrapper,
  StButton,
} from "../components/styledComps";
import { Link } from "react-router-dom";
import { FadeIn } from "../components/globalComponents";

// small props interface for the category selection card
interface SelBoxProps {
  title: String;
  content: String;
  imgEl: any;
  version: string;
}

// Home component and other smaller functional components

export function Home() {
  // category box card
  const SelectorBox: React.FC<SelBoxProps> = (props) => {
    return (
      <StCard>
        <StTextWrapper fat color="light">
          <Container>
            <Row>
              <Col
                xs={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <h2>{props.title}</h2>
              </Col>
              <Col xs={8}>
                <StImage>
                  <img src={props.imgEl} alt="" />
                </StImage>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{props.content}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={props.version}>
                  <StButton color="light">Open</StButton>
                </Link>
              </Col>
            </Row>
          </Container>
        </StTextWrapper>
      </StCard>
    );
  };

  // Actual home component
  return (
    <StBasePage>
      <FadeIn slow>
        <Container>
          <Row>
            <Col xl={2} />
            <Col>
              <Row>
                <Col>
                  <StTextWrapper color="#272727">
                    <h1 style={{ margin: 0 }}>Boost your texting game</h1>
                    <h2 style={{ margin: 0, marginTop: "10px" }}>
                      with the help of AI.{"  "}
                      {String.fromCodePoint(0x1f913)}
                    </h2>
                  </StTextWrapper>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <SelectorBox
                    title="Starter"
                    version="starter"
                    imgEl={starter}
                    content="The algorithm analyses a screenshot of the profile you 
                  are trying to message. It then gives you a starter line that will 
                  most likely score."
                  />
                </Col>
                <Col md={6}>
                  <SelectorBox
                    title="Reply Generator"
                    version="reply"
                    imgEl={reply}
                    content="Supply the AI with the last few lines of your conversation 
                  and receive suggestions for your next message."
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>
                    <br />
                    Do you sometimes struggle to find the right words?
                  </h2>
                  <StTextWrapper fat color="grey">
                    <p>
                      That's normal, but now you can use this handy tool to
                      either start or get help continuing a conversation. <br />
                      Send replies and starter lines suggested by an AI that
                      will most likely score.
                    </p>
                  </StTextWrapper>
                </Col>
              </Row>
            </Col>
            <Col xl={2} />
          </Row>
        </Container>
      </FadeIn>
    </StBasePage>
  );
}
