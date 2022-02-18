import { useEffect, useState } from "react";
import {
  StUploadField,
  StFaceBox,
  StTextWrapper,
  StIcon,
  override,
  stdBlue,
  StButton,
} from "./styledComps";
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";

import { analyseScreenshot } from "./tools/pictureScan";
import { getStarter } from "./tools/get_starter";
import { GridLoader } from "react-spinners";
import { FadeIn } from "./globalComponents";

const roundButtonStyle: any = {
  borderRadius: "100%",
  margin: "20px 0",
  border: "unset",
  position: "absolute",
  bottom: 0,
  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
};

const Dots = ({ aiResult, select }: any) => {
  const SingleDot: any = ({ i }: any) => {
    useEffect(() => {
      if (aiResult.length === 1) select.set(0);
    });

    return (
      <StFaceBox
        className="noSelect"
        onClick={() => select.set(i)}
        clicked={select.value === i}
        left={Math.round(aiResult[i].landmarks[2][0])}
        top={Math.round(aiResult[i].landmarks[2][1])}
      />
    );
  };
  let dots: any = [];
  for (let i = 0; i < aiResult.length; i++) {
    dots.push(<SingleDot key={i} i={i} />);
  }
  return dots;
};

const Loading = ({ loading }: any) => {
  const style: any = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };
  return loading ? (
    <FadeIn>
      <div style={style}>
        <GridLoader color={stdBlue} css={override} size={20} />
      </div>
    </FadeIn>
  ) : null;
};

const RemoveButton = ({ setAI, setImg, setResult, setSelect }: any) => {
  return (
    <button
      className="noSelect"
      style={{
        ...roundButtonStyle,
        cursor: "pointer",
        backgroundColor: "#ec6662",
        width: "50px",
        height: "50px",
        left: "35px",
      }}
      onClick={() => {
        setImg();
        setAI();
        setSelect();
        setResult({
          message: "",
          rValue: 0,
          shown: false,
        });
      }}
    >
      <StIcon size="24px">
        <FiTrash2 />
      </StIcon>
    </button>
  );
};

const ResultsButton = ({ setShowPopIn, select }: any) => {
  const disabled = select === undefined ? true : false;
  return (
    <button
      className="noSelect"
      id="resultsButton"
      disabled={disabled}
      onClick={() => {
        setShowPopIn(true);
      }}
      style={{
        ...roundButtonStyle,
        //backgroundColor: stdBlue,
        width: "75px",
        height: "75px",
        left: "calc(50% - 38px)",
      }}
    >
      <StIcon>
        <BsPerson />
      </StIcon>
    </button>
  );
};

// Upload image
const UImg = ({
  setImg,
  img,
  setAI,
  aiResult,
  select,
  liners,
  setShowPopIn,
  nsfw,
}: any) => {
  async function getAIdata() {
    try {
      setAI(await Promise.resolve(analyseScreenshot()));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!aiResult) {
      getAIdata();
    }
  });

  useEffect(() => {
    // liners.values = [{message: '', rValue: number}, ...]
    if (liners.values.message === "" && aiResult) {
      let l = [];
      for (let i = 0; i < aiResult.length; i++) {
        l.push(getStarter({ selection: "", nsfwAllowed: nsfw }));
      }
      liners.set(l);
    }
  });

  return (
    <FadeIn>
      {aiResult ? (
        <FadeIn>
          <Dots aiResult={aiResult} select={select} />
          <ResultsButton setShowPopIn={setShowPopIn} select={select.value} />
        </FadeIn>
      ) : null}

      <Loading loading={!aiResult} />
      <RemoveButton
        setAI={setAI}
        setImg={setImg}
        setResult={liners.set}
        setSelect={select.set}
      />
      <img id="uploadImage" src={img} alt="Your uploaded screenshot" />
    </FadeIn>
  );
};

// Upload button
const UButton = ({ setImg }: any) => {
  const [inputElement, setInpEl]: any = useState();

  useEffect(() => {
    if (!inputElement) setInpEl(document.getElementById("file-input"));
  }, [inputElement]);

  return (
    <StTextWrapper style={{ height: "100%" }} color="light">
      <input
        accept=".png, .jpg, .jpeg, .tiff"
        id="file-input"
        type="file"
        name="name"
        onInput={(e: any) => {
          // handleFileInput(e)
          setImg(URL.createObjectURL(e?.target.files[0]));
        }}
      />
      <FadeIn>
        <StButton
          className="noSelect"
          id="uButton"
          onClick={() => inputElement.click()}
        >
          <StIcon>
            <FiUploadCloud />
          </StIcon>
          Click here to upload
        </StButton>
      </FadeIn>
    </StTextWrapper>
  );
};

export const UploadButton = (props: any) => {
  return (
    <StUploadField>
      {props.img ? (
        <UImg
          setShowPopIn={props.setShowPopIn}
          setImg={props.setImg}
          img={props.img}
          setAI={props.setAI}
          aiResult={props.aiResult}
          select={props.select}
          liners={props.liners}
          nsfw={props.nsfw}
        />
      ) : (
        <UButton setImg={props.setImg} />
      )}
    </StUploadField>
  );
};
