import styled from "styled-components";
import StBaseContainer from "../base/stBaseContainer";

const StUploadContainer = styled(StBaseContainer)`
  box-shadow: ${(props) => props.theme.base.shadow};
  border-radius: ${(props) => props.theme.base.button.borderRadius};
  overflow: hidden;
`;
export default StUploadContainer;
