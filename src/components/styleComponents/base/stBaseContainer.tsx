import styled from "styled-components";
import { bp } from "./stBasePage";

interface StBaseContainerProps {
  bp?: string;
  reduced?: boolean;
}

const StBaseContainer = styled.div<StBaseContainerProps>`
  height: ${(props) => (props.reduced ? "min-content" : "50vh")};
  min-height: ${(props) => (props.reduced ? "min-content" : "500px")};
  margin-bottom: ${(props) => (props.reduced ? 0 : "30px")};
  width: 100%;
  max-width: calc(50% - 15px);
  @media screen and (max-width: ${(props) => (props.bp ? props.bp : bp.xl)}) {
    max-width: 100%;
  }
`;

export default StBaseContainer;
