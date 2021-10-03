import { useState } from "react";
import { StExplanaition, StTextWrapper } from "./styledComps";
import { BsArrowDown } from "react-icons/bs";
import { StIcon } from "./styledComps";

export const StarterExplanation = (props: any) => {
  const [open, setOpen] = useState(false);

  return (
    <StExplanaition open={open}>
      <div id="arrowContainer">
        <StIcon>
          <BsArrowDown />
        </StIcon>
      </div>
      <StTextWrapper color="grey">
        <p>{props.content}</p>
      </StTextWrapper>
    </StExplanaition>
  );
};
