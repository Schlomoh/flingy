import { useState } from "react";
import { Container } from "react-grid-system";

// global components
import { emoji, FadeIn, CenterPageRow } from "../components/globalComponents";

// smaller components
import { StarterExplanation } from "../components/Explanation";
import { UploadButton } from "../components/ImageButton";
import { PopIn } from "../components/StarterPopIn";

// styles
import { StButton } from "../components/styledComps";

function NsfwButton(state: any): JSX.Element {
  let buttonText = state.get ? "Deactivate NSFW" : "Activate NSFW";
  return (
    <CenterPageRow>
      <StButton
        color={state.get ? "rgb(50,50,50)" : "lightgrey"}
        onClick={() => {
          state.set(!state.get);
        } }
        style={{ margin: "15px 0" }}
      >
        {buttonText}
      </StButton>
    </CenterPageRow>
  );
}

// 'Starters' page
export function Starter(props: any): JSX.Element {
  //states
  const [aiResult, setAI]: any = useState();
  const [img, setImg] = useState();
  const [select, setSelect] = useState();
  const [showPopIn, setShowPopIn] = useState(false);
  const [liners, setLiners] = useState({
    message: "",
    rValue: 0,
    shown: false,
  });

  const [nsfw, setNsfw] = [props.nsfw.get, props.nsfw.set];

  // info message
  let info = !img
    ? "Upload a picture of someone to start " + emoji(0x1f4f7)
    : !aiResult
      ? "Analysing image... " + emoji(0x1f52c)
      : select === undefined
        ? "Now select one of the faces " + emoji(0x1f3af)
        : "Click the blue button to see your result " + emoji(0x1f52e);

  return (
    <FadeIn>
      <PopIn
        show={{ value: showPopIn, set: setShowPopIn }}
        heading={<h2>Results {emoji(0x1f440)}</h2>}
        text={<p>This is your recommended starter message:</p>}
        result={{ values: liners, set: setLiners }}
        select={{ value: select, set: setSelect }}
        nsfw={nsfw} />
      <Container style={{ paddingTop: "75px" }}>
        <CenterPageRow>
          <StarterExplanation nsfw={nsfw} info={info} />
        </CenterPageRow>
        <CenterPageRow>
          <UploadButton
            img={img}
            aiResult={aiResult}
            select={{ set: setSelect, value: select }}
            liners={{ set: setLiners, values: liners }}
            setImg={setImg}
            setAI={setAI}
            setShowPopIn={setShowPopIn}
            nsfw={nsfw} />
        </CenterPageRow>
        <NsfwButton get={nsfw} set={setNsfw} />
      </Container>
    </FadeIn>
  );
}
