import styled from "styled-components";

const StBaseModal: any = styled.div`
  z-index: 400;
  position: fixed;
  display: flex;
  align-items: center;

  // fade in/out
  opacity: ${(props: any) => (props.show ? 1 : 0)};
  visibility: ${(props: any) => (props.show ? "visiible" : "hidden")};
  transition: opacity 0.5s, visibility 0.5s;

  .modal {
    position: absolute;
    margin: 30px;
    padding: 30px;
    background-color: ${(props) => props.theme.background};
    border-radius: ${(props) => props.theme.container.borderRadius};
    box-shadow: ${(props) => props.theme.shadow};
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
