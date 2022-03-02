import { IntrinsicElementsKeys } from "styled-components";
import StBasePage, {
  StCenterContainer,
} from "../styleComponents/base/stBasePage";

const BasePage = ({ children, className}: IcomponentChildren) => {
  return (
    <StBasePage>
      <StCenterContainer>{children}</StCenterContainer>
    </StBasePage>
  );
};

export default BasePage;
