import styled from "styled-components";
import { useState } from "react";
import { StBasePage } from "../BaseStyle";
import { Row, Col, Container } from "react-grid-system";
import starter from "../assets/starter.png";
import reply from "../assets/reply.png";

import { Starter } from "../components/starter";

const StCard = styled.div`
  background-color: #62bcec;
  border-radius: 20px;
  padding: 30px;
  margin-top: 50px;
  transition: filter ease 0.5s;
  filter: drop-shadow(0 5px 20px rgba(0, 0, 0, 0.2));
`;

const StImage = styled.div`
  img {
    width: 40vw;
    max-width: 100%;
    height: auto;
    border-radius: 20px;
  }
`;

// const StIcon = styled.div`
//   svg,
//   path,
//   line,
//   polyline {
//     color: white;
//     height: 32px;
//     width: 32px;
//   }
// `;

export const StTextWrapper = styled.div`
  max-width: 500px;
  h1 {
    color: #020202;
  }
  h2 {
    margin-bottom: unset;
    color: ${(props) => (props.color === "light" ? "white" : props.color)};
  }
  p,
  h3 {
    color: ${(props) => (props.color === "light" ? "white" : props.color)};
  }
`;

const StButton: any = styled.button`
  margin-top: 15px;
  min-width: 100px;
  width: ${(props: any) => (props.size === "small" ? "20%" : "100%")};
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  color: ${(props: any) => (props.color === "light" ? "#62bcec" : "white")};
  background-color: ${(props: any) =>
    props.color === "light" ? "white" : "grey"};
  transition: background-color 0.2s ease;
  :active {
    background-color: lightgray;
  }
`;

const Overlay: any = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  opacity: ${(props: any) => props.show};
  visibility: ${(props: any) => (props.show ? "visible" : "hidden")};
  transition: opacity 0.5s ease-in-out, visibility .5s ease-in-out;
`;

interface SelBoxProps {
  title: String;
  content: String;
  version: String;
  imgEl: any;
}

const Reply = () => {
  return <h1>Reply</h1>;
};

export function Home() {
  const [overlay, setShowOL] = useState(false);
  const [btnDiabled, setDisabled] = useState(false);
  const [overlayContent, setOLContent]: any = useState('');

  const toggleOverlay: any = (version: any) => {
    setShowOL(!overlay);
    setDisabled(true);
    console.log(version);
    //check which box the button was clicked from to set the right overlay content
    setOLContent(version);
    //shortly disable the buttons when clicked to prevent spamming
    setTimeout(() => {
      setDisabled(false);
    }, 800);
  };
  let vis = overlay ? 1 : 0;

  const SelectorBox: React.FC<SelBoxProps> = (props) => {
    return (
      <StCard>
        <StTextWrapper color="light">
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
                <StButton
                  disabled={btnDiabled}
                  color="light"
                  onClick={() => toggleOverlay(props.version)}
                >
                  Open
                </StButton>
              </Col>
            </Row>
          </Container>
        </StTextWrapper>
      </StCard>
    );
  };

  return (
    <StBasePage>
      <Overlay show={vis}>
        <Container >
          <Row>
            <Col style={{ textAlign: "right" }}>
              <StButton
                disabled={btnDiabled}
                size="small"
                onClick={toggleOverlay}
              >
                Close
              </StButton>
            </Col>
          </Row>
          <Row>
            <Col>
              <StTextWrapper>
                {overlayContent === "starter"
                  ? <Starter />
                  : overlayContent === "reply"
                  ? <Reply />
                  : null}
              </StTextWrapper>
            </Col>
          </Row>
        </Container>
      </Overlay>
      <Container>
        <Row>
          <Col xl={2} />
          <Col>
            <Row>
              <Col>
                <StTextWrapper color="#272727">
                  <h1 style={{ margin: 0 }}>Boost your texting game</h1>
                  <h2 style={{ margin: 0, marginTop: "10px" }}>
                    with the help of AI.
                    {String.fromCodePoint(0x1f913)}
                  </h2>
                </StTextWrapper>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <SelectorBox
                  title="Starter"
                  imgEl={starter}
                  version="starter"
                  content="The algorithm analyses a screenshot of the profile you 
                  are trying to message. It then gives you a starter line that will 
                  most likely score."
                />
              </Col>
              <Col md={6}>
                <SelectorBox
                  title="Reply Generator"
                  imgEl={reply}
                  version="reply"
                  content="Supply the AI with the last few lines of your conversation 
                  and receive suggestions for your next message."
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <StTextWrapper>
                  <h2>
                    <br />
                    Do you sometimes struggle to find the right words?
                  </h2>
                  <p>
                    That's normal, but now you can use this handy tool to either
                    start or get help continuing a conversation. <br />
                    Send replies and starter lines suggested by an AI that will
                    most likely score.
                  </p>
                </StTextWrapper>
              </Col>
            </Row>
          </Col>
          <Col xl={2} />
        </Row>
      </Container>
    </StBasePage>
  );
}
