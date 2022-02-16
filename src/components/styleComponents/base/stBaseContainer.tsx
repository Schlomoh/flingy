import styled from "styled-components";
import { bp } from "./stBasePage";

const StBaseContainer: any = styled.div`
  height: ${(props: any) => (props.reduced ? "min-content" : "50vh")};
  min-height: ${(props: any) => (props.reduced ? "min-content" : "500px")};
  margin-bottom: ${(props: any) => (props.reduced ? 0 : "30px")};
  width: 100%;
  max-width: calc(50% - 15px);
  @media screen and (max-width: ${bp.xl}) {
    max-width: 100%;
  }
`;

export default StBaseContainer;
