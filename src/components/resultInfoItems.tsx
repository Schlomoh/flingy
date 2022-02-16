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
  const [len, difX, difY] =
    bbw >= bbh
      ? [bbw + 20, 0, (bbw - bbh) / 2 - 10]
      : [bbh + 20, (bbh - bbw) / 2 - 10, 0];

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
        {renderDelay(<CircleChart percentage={probability} />, 500)}
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
  if (bboxes && img) {
    items = bboxes.map((bbox: any, i: number) => (
      <ResultItem img={img} key={i} i={i} bbox={bbox} />
    ));
  }

  return items ? <>{items}</> : <NoResultsArea />;
};

export default ResultInfoItems;
