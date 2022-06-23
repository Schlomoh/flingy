import { Link } from "react-router-dom";
import BasePage from "../components/baseComponents/basePage";
import StBaseButton from "../components/styleComponents/base/stBaseButton";
import StBaseContainer from "../components/styleComponents/base/stBaseContainer";

import rocket from "../content/assets/rocket.png";

import StBaseText from "../components/styleComponents/base/stBaseText";
import styled from "styled-components";
import { bp } from "../components/styleComponents/base/stBasePage";
import React from "react";

const StWrapper: any = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: ${(props: any) => (props.wrapReverse ? "wrap-reverse" : "wrap")};
  justify-content: space-between;
`;

const Container = styled(StBaseContainer)<{
  space?: boolean;
  flexDirection?: React.CSSProperties["flexDirection"];
  justifyContent?: React.CSSProperties["justifyContent"];
}>`
  margin: ${(props) => (props.space ? "50px 0" : "0")};
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "initial"};
`;

const Home = () => {
  return (
    <BasePage>
      <StBaseText>
        <h1>Piqups</h1>
        <h3>
          Boost your texting game with the help of artificial intelligence.
        </h3>
        <StWrapper wrapReverse>
          <Container space bp={bp.sm} reduced>
            <h2>Analyze an image</h2>
            <p>
              An AI will analyze the image and tries to propose messages
              depending on the faces identified.
            </p>
            <Link to="analyzer">
              <StBaseButton margin="0" inner>
                Open
              </StBaseButton>
            </Link>
          </Container>
          <Container
            bp={bp.sm}
            flexDirection="row"
            justifyContent="center"
            reduced
          >
            <img
              src={rocket}
              alt=""
              style={{ width: "75%", height: "75%", objectFit: "contain" }}
            />
          </Container>
        </StWrapper>
      </StBaseText>
    </BasePage>
  );
};
export default Home;
