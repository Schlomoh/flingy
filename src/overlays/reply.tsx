import { StTextWrapper } from "../components/styledComps";
import { BaseOLStruct } from "../components/baseStruct";

export const Reply = () => {
  return (
    <BaseOLStruct title='Reply Generator' magicElement={<div></div>}>
      <StTextWrapper>
        <p>
          Here you can provide the last few messages you exchanged with another
          person and let the Ai give you a generated response, so you dont have
          to think of one.
        </p>
      </StTextWrapper>
    </BaseOLStruct>
  );
};
