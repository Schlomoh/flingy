// react & redux
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
// react icons
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";
// selectors & state management
import { useOutputSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";
import { useShowResultSelector } from "../../utils/stateManagement/slicesNselectors/modalSelectors";
import { setShowResult } from "../../utils/stateManagement/slicesNselectors/modalSlice";
// components & style
import styled from "styled-components";
import BaseModal from "../baseComponents/baseModal";
import StBaseButton from "../styleComponents/base/stBaseButton";
import StBaseText from "../styleComponents/base/stBaseText";

const StTextsView: any = styled.div`
  p {
    margin: 30px 0 15px 0;
  }
  #buttonWrapper {
    margin-bottom: 20px;
  }

  #textField {
    min-height: 100px;
    padding: 20px;
    padding-top: 40px;
    border: ${(props) => props.theme.colors.lightGrey} solid 2px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: flex-end;
    overflow: hidden;
  }

  #message {
    max-width: 60%;
    padding: 10px 20px;
    border-radius: 25px;
    border-bottom-right-radius: 5px;
    background-color: ${(props) => props.theme.colors.accent};
    transform: translateX(500px);
    color: white;
    overflow: hidden;
    transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    p {
      margin: 0;
    }
  }

  button {
    height: unset;
    width: fit-content;
    color: ${(props) => props.theme.colors.accent};
    border-color: ${(props) => props.theme.colors.accent};
    border-radius: 50px;
    border: solid 2px;
    :hover {
      background-color: ${(props) => props.theme.colors.accent};
      color: white;
    }
  }
`;

const Message = ({ text, showModal }: { text: string; showModal: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (showModal)
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = "translateX(0)";
        }
      }, 120);
    return () => {
      if (ref.current) {
        ref.current.style.transform = "translateX(500px)";
      }
    };
  });

  return (
    <div ref={ref} id="message">
      <p>{text}</p>
    </div>
  );
};

const TextField = ({
  id,
  messageIndex,
  output,
  show,
}: {
  id: number;
  messageIndex: number;
  output: Toutput | undefined;
  show: boolean;
}) => {
  let message: JSX.Element | null = null;

  if (output && output.length > 0) {
    message = (
      <Message showModal={show} text={output[id].messages[messageIndex].text} />
    );
  }

  return <div id="textField">{message}</div>;
};

const ButtonRow = (props: { categories: string[]; index: any }) => {
  const { categories, index } = props;
  const buttons = categories.map((category, i) => (
    <StBaseButton
      padding="10px 15px"
      margin="0 15px 0 0"
      onClick={() => index.set(i)}
      key={i}
    >
      <strong>{category}</strong>
    </StBaseButton>
  ));
  return <div id="buttonWrapper">{buttons}</div>;
};

const TextsViewer = ({ id, show }: { id: number; show: boolean }) => {
  const output = useOutputSelector();
  const [messageIndex, setMessageIndex] = useState(0);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (output && output.length > 0)
      setCategories(output[id].messages.map((e) => e.reason));
    return () => setMessageIndex(0);
  }, [output, show]);

  return (
    <StTextsView>
      <StBaseText>
        <p>You can select a category:</p>
      </StBaseText>
      <ButtonRow
        categories={categories}
        index={{ get: messageIndex, set: setMessageIndex }}
      />
      <StBaseText>
        <p>
          Probability:{" "}
          {output && output.length > 0
            ? Math.floor(output[id].messages[messageIndex].probability)
            : null}
          %
        </p>
      </StBaseText>
      <TextField
        id={id}
        messageIndex={messageIndex}
        output={output}
        show={show}
      />
    </StTextsView>
  );
};

const ResultModal = () => {
  const { show, id } = useShowResultSelector();
  const dispatch = useDispatch();
  const setShow = () => dispatch(setShowResult({ show: false, id: 0 }));
  return (
    <BaseModal show={show}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <StBaseButton small margin="0px" padding="1px 5x" onClick={setShow}>
          <IconContext.Provider value={{ color: "grey", size: "20px" }}>
            <IoClose />
          </IconContext.Provider>
        </StBaseButton>
      </div>
      <div>
        <h2>Recommended messages:</h2>
        <TextsViewer id={id} show={show} />
      </div>
    </BaseModal>
  );
};

export default ResultModal;
