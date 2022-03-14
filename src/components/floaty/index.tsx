import { useLayoutEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiCookie, BiHomeAlt } from "react-icons/bi";
import { RiHandHeartLine } from "react-icons/ri";
import styled from "styled-components";
import { Link } from "react-router-dom";
import store from "../../utils/stateManagement/store";
import { setShowCookieModal } from "../../utils/stateManagement/slicesNselectors/cookieSlice";

const StFloaty: any = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 0;
  background-color: white;
  box-shadow: ${(props) => props.theme.shadow};
  margin: 15px;
  border-radius: 30px;
  height: ${(props: any) => props.height};
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.23, 1, 0.32, 1);

  #buttonWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    svg,
    path {
      transition: transform 0.3s;
      stroke: grey;
    }
  }

  .floatButton {
    width: 60px;
    height: 60px;
    padding: 10px 0;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    background-color: white;
    transition: border 0.5s ease-in;
    :disabled {
        cursor: not-allowed;
    }
  }
`;

const Floaty = () => {
  const [showMore, setShowMore] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const transform = showMore ? "rotate(180deg)" : "rotate(0deg)";

  useLayoutEffect(() => {
    const element = ref.current;
    const content = contentRef.current;

    if (element && content) {
      if (showMore) {
        element.style.height = `${content.clientHeight + 30}px`;
      } else {
        element.style.height = "0px";
      }
    }
  });

  interface IiconStyle {
    color: string;
    size: string;
    style?: { transform?: string; stroke?: string };
  }

  const toggle = () => setShowMore(!showMore);
  const showCookies = () => store.dispatch(setShowCookieModal(true));

  const height = showMore ? "250px" : "60px";

  let iconStyle = {
    color: "grey",
    size: "25px",
    style: { stroke: "grey" },
  } as IiconStyle;

  let moreStyle = Object.assign({}, iconStyle);
  moreStyle.style = { transform: transform };

  return (
    <StFloaty height={height}>
      <div id="buttonWrapper">
        <button onClick={toggle} className="floatButton">
          <IconContext.Provider value={moreStyle}>
            <FiMoreHorizontal />
          </IconContext.Provider>
        </button>
        <Link to="/">
          <button className="floatButton">
            <IconContext.Provider value={iconStyle}>
              <BiHomeAlt />
            </IconContext.Provider>
          </button>
        </Link>
        <button onClick={showCookies} className="floatButton">
          <IconContext.Provider value={iconStyle}>
            <BiCookie />
          </IconContext.Provider>
        </button>
        <button disabled className="floatButton">
          <IconContext.Provider value={iconStyle}>
            <RiHandHeartLine />
          </IconContext.Provider>
        </button>
      </div>
    </StFloaty>
  );
};

export default Floaty;
