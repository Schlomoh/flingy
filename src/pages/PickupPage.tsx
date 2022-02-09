// components
import BasePage from "../components/baseComponents/basePage";
import UploadField from "../components/uploadField";
import StBaseText from "../components/styleComponents/base/stBaseText";

// content
import text from "../content/text/pickupPageTexts.json";
import StBaseContainer from "../components/styleComponents/base/stBaseContainer";
import ResultInfoItems from "../components/resultInfoItems";
import { useAiData, useAiWorker, useInitAi } from "../utils/analysis/useAiData";
import AnalysisWorker from "worker-loader!../utils/dedicated_worker/aiWorker";

const PickupPage = () => {
  const worker = new AnalysisWorker();
  useAiWorker(worker, "initialize");

  return (
    <BasePage>
      <StBaseText>
        <h2>{text.title}</h2>
        <h3>{text.subTitle}</h3>
        <p>{text.desctiption}</p>
      </StBaseText>
      <UploadField worker={worker} />
      <StBaseContainer>
        <ResultInfoItems />
      </StBaseContainer>
    </BasePage>
  );
};

export default PickupPage;
