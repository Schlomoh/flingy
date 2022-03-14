import { IconContext } from "react-icons";
import { RiArrowRightUpLine } from "react-icons/ri";
// hooks
import { LegacyRef, useRef } from "react";
import {
  useAiDataSelector,
  useBoundingBoxSelector,
  useImageSelector,
  useOutputSelector,
} from "../../../utils/stateManagement/slicesNselectors/analysisSelectors";

// components
import StBaseText from "../../styleComponents/base/stBaseText";
import StResultItem from "../../styleComponents/tailored/stResultItem";
import CircleChart from "./circleGraph";
import { NoResultsArea } from "./noResults";
import { useDispatch } from "react-redux";
import { setShowResult } from "../../../utils/stateManagement/slicesNselectors/modalSlice";
import StBaseButton from "../../styleComponents/base/stBaseButton";

const OpenButton = ({ i }: { i: number }) => {
  const dispatch = useDispatch();
  function showResult() {
    dispatch(setShowResult({ show: true, id: i }));
  }

  return (
    <StBaseButton
      small
      margin="0px"
      padding="1px 5px"
      onClick={showResult}
      className="openResults"
    >
      <IconContext.Provider
        value={{
          size: "20px",
          color: "grey",
        }}
      >
        <RiArrowRightUpLine />
      </IconContext.Provider>
    </StBaseButton>
  );
};

const ResultItem = (props: {
  img: string | undefined;
  i: number;
  bbox: number[];
  tagTexts: string[];
}) => {
  const { img, i, bbox, tagTexts } = props;
  const canvasRef: LegacyRef<HTMLCanvasElement> = useRef(null);
  const [bbx, bby, bbw, bbh, probability] = bbox;

  const FaceCanvas = () => {
    // to get a square image using bounding box with unknkown aspoect ratio
    //len = square side length
    // dif x / y (the offset) = 0 or the larger side minus the shorter side by half
    const [len, difX, difY] =
      bbw >= bbh
        ? [bbw + 20, 0, (bbw - bbh) / 2]
        : [bbh + 20, (bbh - bbw) / 2, 0];

    // creating new image element for the face previvew displayed inside the canvas
    const imgElement = new Image();
    if (img) imgElement.src = img;
    imgElement.onload = () => {
      const ctx = canvasRef.current?.getContext("2d");
      ctx?.drawImage(
        imgElement,
        bbx - difX,
        bby - difY,
        len,
        len,
        0,
        0,
        60,
        60
      );
    };

    return (
      <div className="imgWrapper">
        <CircleChart percentage={probability} />
        <canvas height={60} width={60} ref={canvasRef} />
      </div>
    );
  };

  const Chips = () => (
    <>
      {tagTexts.map((element: any, i: number) => {
        return (
          <div key={i} className="chip">
            <strong>
              <p>{element}</p>
            </strong>
          </div>
        );
      })}
    </>
  );

  return (
    <StResultItem>
      <span id="wrap">
        <FaceCanvas />
        <div style={{ maxWidth: "75%" }}>
          <StBaseText>
            <h3>Face {i + 1}</h3>
            <strong>
              <p>Certainty: {Math.floor(probability * 100)}%</p>
            </strong>
          </StBaseText>
          <div className="chipContainer">
            <Chips />
          </div>
        </div>
      </span>
      <OpenButton i={i} />
    </StResultItem>
  );
};

/**
 * Array of all the items created depending on th ai results
 */
const ResultInfoItems = () => {
  const img = useImageSelector();
  const bboxes = useBoundingBoxSelector();
  const aiData = useAiDataSelector();
  const output = useOutputSelector();

  const items = useRef<JSX.Element[] | null>();

  if (bboxes && bboxes.length > 0 && img && !items.current && output) {
    items.current = bboxes.map((bbox: any, i: number) => (
      <ResultItem
        tagTexts={output[0].tags}
        img={img}
        key={i}
        i={i}
        bbox={bbox}
      />
    ));
  } else if (!aiData) items.current = null;

  return items.current ? <>{items.current}</> : <NoResultsArea />;
};

export default ResultInfoItems;
