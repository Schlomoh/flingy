// components
import BasePage from "../components/baseComponents/basePage";
import UploadField from "../components/uploadField";
import StBaseText from "../components/styleComponents/base/stBaseText";

// content
import {
  Heading,
  SubHeading,
  Description,
} from "../content/text/pickupPageTexts";
import StBaseContainer from "../components/styleComponents/base/stBaseContainer";
import ResultInfoItems from "../components/uploadField/resultItems";
import Expander from "../components/baseComponents/baseExpander";
import LoadedIndicator from "../components/accessories/loadedIndicator";
import { MutableRefObject } from "react";
import UploadWarning from "../components/accessories/uploadWarning";
import ResultModal from "../components/uploadField/resultModal";

const PickupPage = ({
  worker,
}: {
  worker: MutableRefObject<Worker | undefined>;
}) => {
  return (
    <>
      <UploadWarning active={worker.current !== undefined} />
      <ResultModal />
      <BasePage>
        <div>
          <StBaseText>
            <Heading />
            <SubHeading />
            <Expander>
              <Description />
            </Expander>
          </StBaseText>
          <LoadedIndicator worker={worker} />
        </div>
        <UploadField worker={worker} />
        <StBaseContainer reduced>
          <ResultInfoItems />
        </StBaseContainer>
      </BasePage>
    </>
  );
};

export default PickupPage;
