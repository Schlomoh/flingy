// hooks
import { LegacyRef, useEffect, useRef, useState } from "react";
import {
  useBoundingBoxSelector,
  useImageSelector,
} from "../utils/stateManagement/slicesNselectors/analysisSelectors";

// components
import StBaseText from "./styleComponents/base/stBaseText";
import StResultItem from "./styleComponents/tailored/stResultItem";
import CircleChart from "./circleGraph";
import { NoResultsArea } from "./noResults";

const ResultItem = (props: {
  img: string | undefined;
  i: number;
  bbox: number[];
}) => {
  const { img, i, bbox } = props;
  const canvasRef: LegacyRef<HTMLCanvasElement> = useRef(null);
  const [bbx, bby, bbw, bbh, probability] = bbox;
  // to get a square image using bounding box with unknkown aspoect ratio
  //let = square side length
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
    ctx?.drawImage(imgElement, bbx - difX, bby - difY, len, len, 0, 0, 60, 60);
  };

  const renderDelay = (element: JSX.Element, delay: number) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setShow(true);
      }, delay);
    });
    return show ? element : null;
  };

  return (
    <StResultItem>
      <div id="imgWrapper">
        {renderDelay(<CircleChart percentage={probability} />, 700)}
        <canvas height={60} width={60} ref={canvasRef} />
      </div>
      <div>
        <StBaseText>
          <h3>Person #{i + 1}</h3>
        </StBaseText>
      </div>
    </StResultItem>
  );
};

const ResultInfoItems = () => {
  const img = useImageSelector();
  const bboxes = useBoundingBoxSelector();

  let items;
  if (bboxes && bboxes.length > 0 && img) {
    items = bboxes.map((bbox: any, i: number) => (
      <ResultItem img={img} key={i} i={i} bbox={bbox} />
    ));
  }

  return items ? <>{items}</> : <NoResultsArea />;
};

export default ResultInfoItems;
