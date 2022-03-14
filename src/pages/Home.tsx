import { Link } from "react-router-dom";
import BasePage from "../components/baseComponents/basePage";
import StBaseButton from "../components/styleComponents/base/stBaseButton";
import StBaseContainer from "../components/styleComponents/base/stBaseContainer";

import rocket from "../content/assets/rocket.png";

import StBaseText from "../components/styleComponents/base/stBaseText";
import styled from "styled-components";
import { bp } from "../components/styleComponents/base/stBasePage";

const StWrapper: any = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: ${(props: any) => (props.wrapReverse ? "wrap-reverse" : "wrap")};
  justify-content: space-between;
`;

const Container: any = styled(StBaseContainer)`
  margin:${(props: any) => props.space ? '50px 0' : '0'};
`

const Home = () => {
  return (
    <BasePage>
      <StBaseText>
        <h1>Piqups</h1>
        <StWrapper wrapReverse>
          <Container bp={bp.sm} reduced>
            <h2>
              Boost your texting game with the help of artificial intelligence.
            </h2>
          </Container>
          <Container bp={bp.sm} reduced>
            <img
              src={rocket}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Container>
        </StWrapper>
        <StWrapper>
          <Container space bp={bp.sm} reduced>
            <h3>Analyze an image</h3>
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
          <Container space bp={bp.sm} reduced>
            <h3>Random pick-up lines</h3>
            <p>Get a randomly picked line (and maybe make a little game out of it with a couple of friends at a bar ;) ) </p>
            <Link to="analyzer">
              <StBaseButton disabled margin="0" inner>
                Open
              </StBaseButton>
            </Link>
          </Container>
        </StWrapper>
      </StBaseText>
    </BasePage>
  );
};
export default Home;
