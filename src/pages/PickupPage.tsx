// components
import BasePage from "../components/baseComponents/basePage";
import UploadField from "../components/uploadField";
import StBaseText from "../components/styleComponents/base/stBaseText";

// content
import text from "../content/text/pickupPageTexts.json";
import StBaseContainer from "../components/styleComponents/base/stBaseContainer";
import ResultInfoItems from "../components/uploadField/resultItems";
import Expander from "../components/baseComponents/baseExpander";
import ResultModal from "../components/uploadField/resultModal";

const PickupPage = () => {
  return (<>
    <ResultModal/>
    <BasePage>
      <Expander>
        <StBaseText>
          <h2>{text.title}</h2>
          <h3>{text.subTitle}</h3>
          <p>{text.desctiption}</p>
        </StBaseText>
      </Expander>

      <UploadField />
      <StBaseContainer reduced>
        <ResultInfoItems />
      </StBaseContainer>
    </BasePage>
    </>
  );
};

export default PickupPage;
