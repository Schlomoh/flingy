import { StExplanaition, StTextWrapper } from "./styledComps";

export function StarterExplanation(props: any): JSX.Element {
  return (
    <StExplanaition nsfw={props.nsfw}>
      <StTextWrapper align="center" color="grey">
        <div id="infoTextContainer">
          <p style={{ fontSize: "20px" }}>{props.info}</p>
        </div>
      </StTextWrapper>
    </StExplanaition>
  );
}
