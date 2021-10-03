import pattern from "../assets/email-pattern.png";
import { CenterPageRow } from "../components/baseStruct";
import { StBaseStruct } from "../components/styledComps";
import { Container } from "react-grid-system";
import { UploadButton } from "../components/ImageButton";
import { useState } from "react";
import { FadeIn, PopIn } from "../components/globalComponents";
import { StarterExplanation } from "../components/Explanation";

export const Starter = () => {
  const [aiResult, setAI]: any = useState();
  const [img, setImg] = useState();
  const [liners, setLiners] = useState({
    message: "",
    rValue: 0,
    shown: false,
  });

  const [select, setSelect] = useState();
  const [showPopIn, setShowPopIn] = useState(false);
  const [content, setContent] = useState("");

  return (
    <FadeIn>
      <PopIn
        show={{ value: showPopIn, set: setShowPopIn }}
        heading={<h2>Results {String.fromCodePoint(0x1f440)}</h2>}
        text={<p>This is your recommended starter message:</p>}
        result={{ values: liners, set: setLiners }}
        select={{ value: select, set: setSelect }}
      />

      <Container style={{ paddingTop: "100px" }}>
        <CenterPageRow>
          <StarterExplanation content={content} />
        </CenterPageRow>
        <CenterPageRow>
          <UploadButton
            infoMessage={{ value: content, set: setContent }}
            img={img}
            aiResult={aiResult}
            select={{ set: setSelect, value: select }}
            liners={{ set: setLiners, values: liners }}
            setImg={setImg}
            setAI={setAI}
            setShowPopIn={setShowPopIn}
          />
        </CenterPageRow>
      </Container>
    </FadeIn>
  );
};
