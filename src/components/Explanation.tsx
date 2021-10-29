import { StExplanaition, StTextWrapper } from "./StyledComps";

export const StarterExplanation = (props: any) => {
  return (
    <StExplanaition nsfw={props.nsfw}>
      <StTextWrapper align="center" color="grey">
        <div id="infoTextContainer">
          <p style={{ fontSize: "20px" }}>{props.info}</p>
        </div>
      </StTextWrapper>
    </StExplanaition>
  );
};
