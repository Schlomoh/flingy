import { IconContext } from "react-icons";
import { FaRegFrownOpen } from "react-icons/fa";
import styled from "styled-components";
import StBaseText from "./styleComponents/base/stBaseText";

const CenterColumn = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StNoResultsArea = styled(CenterColumn)`
  height: 20%;
  width: calc(100% - 6px);
  border: 3px dotted lightgrey;
  border-radius: 20px;
  margin: auto;
`;

const StNoResultsImage = styled(CenterColumn)`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export const NoResultsArea = () => {
  return (
    <StNoResultsArea>
      <StBaseText>
        <p>Your results will appear here.</p>
      </StBaseText>
    </StNoResultsArea>
  );
};

export const NoResultsImage = () => {
  return (
    <StNoResultsImage>
      <StBaseText color="white">
        <IconContext.Provider value={{ size: "32px", color: "white" }}>
          <FaRegFrownOpen />
        </IconContext.Provider>
        <p>That didn't work...</p>
      </StBaseText>
    </StNoResultsImage>
  );
};
