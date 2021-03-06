import styled from "styled-components";
import StBaseContainer from "../base/stBaseContainer";

const StUploadContainer = styled(StBaseContainer)`
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: ${(props) => props.theme.container.borderRadius};
  overflow: hidden;
`;
export default StUploadContainer;
