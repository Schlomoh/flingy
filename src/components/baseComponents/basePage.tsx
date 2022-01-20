import StBasePage from "../styleComponents/base/stBasePage";

const BasePage = ({ children }: IcomponentChildren) => {
  return (
    <StBasePage>
      <div className="centerContainer">{children}</div>
    </StBasePage>
  );
};

export default BasePage;
