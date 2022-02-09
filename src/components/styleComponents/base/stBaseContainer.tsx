import styled from "styled-components";
import { bp } from "./stBasePage";

const StBaseContainer = styled.div`
  width: 100%;
  height: 50vh;
  min-height: 500px;
  max-width: calc(50% - 15px);

  margin-bottom: 30px;

  @media screen and (max-width: ${bp.xl}) {
    max-width: 100%;
  }
`;

export default StBaseContainer;
