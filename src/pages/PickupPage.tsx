// components
import BasePage from "../components/baseComponents/basePage";
import UploadField from "../components/baseComponents/uploadField";
import StBaseText from "../components/styleComponents/base/stBaseText";

// content
import text from "../content/text/pickupPageTexts.json";

const PickupPage = () => {
  return (
    <BasePage>
      <StBaseText>
        <h2>{text.title}</h2>
        <h3>{text.subTitle}</h3>
        <p>{text.desctiption}</p>
      </StBaseText>
      <UploadField />
    </BasePage>
  );
};

export default PickupPage;
