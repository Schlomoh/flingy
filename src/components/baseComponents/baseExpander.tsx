import { ReactChild, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import StBaseButton from "../styleComponents/base/stBaseButton";

import { FiChevronDown } from "react-icons/fi";
import { IconContext } from "react-icons/lib";

const StExpander: any = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
  .container {
    overflow: hidden;
    transition: height cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  }
  button {
    padding: 5px 10px;
    height: unset;
    border-radius: 20px;
    width: fit-content;
    display: flex;
    align-items: center;
    color: gray;
    font-size: 12px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    :hover {
      color: gray;
    }
  }
  svg {
    transition: transform ease-out 0.25s;
  }
`;

const Expander = ({ children }: { children: ReactChild }) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [transform, text] = show
    ? ["rotate(180deg)", "hide info"]
    : ["rotate(0deg)", "show info"];

  useLayoutEffect(() => {
    const element = ref.current;
    const content = contentRef.current;

    if (element && content) {
      if (show) {
        element.style.height = `${content.clientHeight}px`;
      } else {
        element.style.height = "135px";
      }
    }
  });
  return (
    <>
      <StExpander>
        <div className="container" ref={ref}>
          <div ref={contentRef}>{children}</div>
        </div>

        <StBaseButton
          round={40}
          onClick={(e: MouseEvent) => {
            setShow(!show);
          }}
        >
          <IconContext.Provider
            value={{
              color: "grey",
              size: "20px",
              style: { transform: transform },
            }}
          >
            <FiChevronDown />
          </IconContext.Provider>

          {text}
        </StBaseButton>
      </StExpander>
    </>
  );
};

export default Expander;
