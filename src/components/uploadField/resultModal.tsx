import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useOutputSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";
import { useShowResultSelector } from "../../utils/stateManagement/slicesNselectors/modalSelectors";
import { setShowResult } from "../../utils/stateManagement/slicesNselectors/modalSlice";
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
    min-width: 25%;
    max-width: 33%;
    width: fit-content;
    height: unset;
    border: none;
    border-radius: 50px;
    color: white;
    background-color: ${(props) => props.theme.colors.accent};
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

  if (output) {
    message = (
      <Message showModal={show} text={output[id].messages[messageIndex].text} />
    );
  }

  return <div id="textField">{message}</div>;
};

const ButtonRow = (props: { categories: string[]; setIndex: any }) => {
  const { categories, setIndex } = props;
  const buttons = categories.map((category, i) => (
    <StBaseButton
      padding="10px 15px"
      margin="0 15px 0 0"
      onClick={() => setIndex(i)}
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
    if (output) setCategories(output[id].messages.map((e) => e.reason));
    return () => setMessageIndex(0);
  }, [output, show]);

  return (
    <StTextsView>
      <StBaseText>
        <p>You can select a category:</p>
      </StBaseText>
      <ButtonRow categories={categories} setIndex={setMessageIndex} />
      <StBaseText>
        <p>
          Probability:{" "}
          {output
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
        <StBaseButton small margin="0px" padding="5px 0px" onClick={setShow}>
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
