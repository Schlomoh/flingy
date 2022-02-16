import styled from "styled-components";

import text from "../content/text/pickupPageTexts.json";

const StLoader = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: inherit;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  text-align: center;
  color: rgba(255, 255, 255, 0.75);
  svg {
    width: 3.75em;
    animation: 1.5s spin ease infinite;
  }

  .ring {
    fill: none;
    stroke: rgba(255, 255, 255, 0.3);
    stroke-width: 2;
  }

  .ball {
    fill: white;
    stroke: none;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <StLoader>
    <svg viewBox="0 0 50 50">
      <circle className="ring" cx="25" cy="25" r="20"></circle>
      <circle className="ball" cx="25" cy="5" r="3.5"></circle>
    </svg>
    <p>{text.loadingText}</p>
  </StLoader>
);

export default Loader;
