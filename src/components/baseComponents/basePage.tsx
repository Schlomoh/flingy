import StBasePage, {
  StCenterContainer,
} from "../styleComponents/base/stBasePage";

const BasePage = ({ children }: IcomponentChildren) => {
  return (
    <StBasePage>
      <StCenterContainer>{children}</StCenterContainer>
    </StBasePage>
  );
};

export default BasePage;
