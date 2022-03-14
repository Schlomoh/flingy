import { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { useAiDataSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";
import BaseModal from "../baseComponents/baseModal";
import StBaseButton from "../styleComponents/base/stBaseButton";
import StBaseText from "../styleComponents/base/stBaseText";

const StUploadWarning = styled.div``;

const UploadWarning = ({active} :{active: boolean}) => {
  const [show, setShow ] = useState(true)

  useLayoutEffect(()=> {
    if(active) {
      setShow(false)
    }
  })

  return (
    <BaseModal show={show}>
      <StUploadWarning>
        <StBaseText>
          <h3>
            Be cautious when using mobile data {String.fromCodePoint(0x1f4f1)}
          </h3>
          <p>
            Upon uploading an image the site will load up to{" "}
            <strong>30MB </strong>
            of data for the ai models. Make sure you are either using wifi or
            have enough data left.
          </p>
          <p>
            After that the AI will be cached on your device and will not have to
            be downloaded again. Although cached, it may still take a few
            seconds to reload the data.
          </p>
        </StBaseText>
        <StBaseButton onClick={() => setShow(false)} margin=" 0" inner>
          Alright, let's go!
        </StBaseButton>
      </StUploadWarning>
    </BaseModal>
  );
};

export default UploadWarning;
