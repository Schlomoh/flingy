import styled from "styled-components";

export const StCookieOverlay = styled.div`
  position: fixed;
  z-index: 100;
  #cookieBackground {
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100vw;
    height: 100vh;
  }
  #centerAlign {
    overflow: hidden;
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const StCookieBox = styled.div`
  z-index: 101;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  max-width: 500px;
  margin: 30px;
  max-height: 70vh;
  overflow: scroll;
  h2 {
    margin: 0;
  }
`;
