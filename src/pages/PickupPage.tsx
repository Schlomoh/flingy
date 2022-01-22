// components
import BasePage from "../components/baseComponents/basePage";
import UploadField from "../components/uploadField";
import StBaseText from "../components/styleComponents/base/stBaseText";

// content
import text from "../content/text/pickupPageTexts.json";
import StBaseContainer from "../components/styleComponents/base/stBaseContainer";

const PickupPage = () => {
  return (
    <BasePage>
      <StBaseText>
        <h2>{text.title}</h2>
        <h3>{text.subTitle}</h3>
        <p>{text.desctiption}</p>
      </StBaseText>
      <UploadField />
      <StBaseContainer>
        <StBaseText>
          <h2>{text.title}</h2>
          <h3>{text.subTitle}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            inventore sapiente cum modi? Incidunt quae esse aspernatur modi quas
            mollitia consectetur nostrum aliquam molestias deleniti soluta iure
            quaerat, id praesentium?
          </p>
        </StBaseText>
      </StBaseContainer>
    </BasePage>
  );
};

export default PickupPage;
