import styled from "styled-components";
import { bp } from "./stBasePage";

const StBaseModal: any = styled.div`
  top: 0;
  left: 0;
  z-index: 400;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  // fade in/out
  opacity: ${(props: any) => (props.show ? 1 : 0)};
  visibility: ${(props: any) => (props.show ? "visiible" : "hidden")};
  transition: opacity 0.35s, visibility 0.35s;

  .modal {
    position: absolute;
    max-height: 80vh;
    overflow: scroll;
    margin: 20px;
    padding: 20px;
    background-color: ${(props) => props.theme.background};
    border-radius: ${(props) => props.theme.container.borderRadius};
    box-shadow: ${(props) => props.theme.shadow};

    @media screen and (min-width: ${bp.sm}) {
      max-width: ${bp.sm};
    }
    @media screen and (min-width: ${bp.xl}) {
      width: ${bp.xl};
    }
    @media screen and (min-width: ${bp.xxl}) {
      max-width: ${bp.lg};
    }
  }

  .modalBackground {
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100vw;
    height: 100vh;
  }
`;
export default StBaseModal;
