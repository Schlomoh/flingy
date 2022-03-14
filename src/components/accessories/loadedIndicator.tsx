import { MutableRefObject, useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { useAiDataSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";

const StLoadedIndicator: any = styled.div`
  margin: 0 0 30px;
  display: flex;
  justify-content: center;
  #indicatorContainer {
    width: fit-content;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border: solid 2px;
    border-radius: 30px;
    border-color: ${(props: any) =>
      props.color === "white" ? "transparent" : props.color};
    color: ${(props: any) => props.color};
    background-color: ${(props: any) => props.background};
    transition: all 0.5s;
  }
  #indicatorDot {
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background-color: ${(props: any) => props.color};
    transition: all 0.5s;
  }
  p {
    margin: 0 0 0 10px;
  }
`;

const LoadedIndicator = ({
  worker,
}: {
  worker: MutableRefObject<Worker | undefined>;
}) => {
  const aiData = useAiDataSelector();
  let active = false;
  if (worker.current !== undefined && !active) active = true;
  const [content, setContent] = useState({
    text: "AI models not loaded",
    color: "white",
    background: "#d33c3c",
  });

  useLayoutEffect(() => {
    if (active)
      setContent({
        text: "AI models loaded",
        color: "#3c9a72",
        background: "white",
      });
  }, [aiData]);

  return (
    <StLoadedIndicator color={content.color} background={content.background}>
      <div id="indicatorContainer">
        <div id="indicatorDot" />
        <strong>
          <p>{content.text}</p>
        </strong>
      </div>
    </StLoadedIndicator>
  );
};

export default LoadedIndicator;
