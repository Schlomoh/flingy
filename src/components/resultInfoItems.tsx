// hooks
import {
  useAiDataSelector,
  useImageSelector,
} from "../utils/stateManagement/slicesNselectors/analysisSelectors";

// components
import StBaseText from "./styleComponents/base/stBaseText";
import StResultItem from "./styleComponents/tailored/stResultItem";

const ResultItem = (props: { img: string | undefined }) => {
  const { img } = props;
  return (
    <StResultItem>
      <StBaseText>
        <img src={"bblob"} alt={"yeah wateva"} />
      </StBaseText>
    </StResultItem>
  );
};

const NoResults = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        border: "3px dotted lightgrey",
        borderRadius: "20px",
        margin: "auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <StBaseText>
        <p>Your results will appear here.</p>
      </StBaseText>
    </div>
  );
};

const ResultInfoItems = () => {
  const result = useAiDataSelector();
  const img = useImageSelector();
  let items;
  if (result) {
    items = result.face?.map((item: any, i: number) => (
      <ResultItem img={img} key={i} />
    ));
  }

  return items ? <>{items}</> : <NoResults />;
};

export default ResultInfoItems;
