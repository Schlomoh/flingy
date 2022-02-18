import styled from "styled-components";
import { css } from "@emotion/react";

export const stdBlue = "#2a7ef6";

export const StBase: any = styled.div`
  font-family: "Mulish", sans-serif;
  text-align: left;
  background-color: #fefefe;

  h1 {
    font-family: "Raleway", sans-serif;
    font-size: 42px;
    font-weight: 900;
    line-height: 0.8;
    color: #272727;
  }

  h2 {
    font-family: "Raleway", sans-serif;
    line-height: 1.2;
    font-size: 28px;
    font-weight: 600;
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
  }

  p {
    line-height: 1.4;
    font-size: 18px;
    font-weight: 400;
  }
  button {
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
  }
`;

export const StBaseStruct: any = styled.div`
  background-image: ${(props: any) => `url(${props.bg})`};
  background-repeat: repeat;
  height: 100vh;
`;

export const StCard: any = styled.div`
  background-color: ${(props: any) => (props.disabled ? "lightgrey" : stdBlue)};
  border-radius: 20px;
  padding: 30px;
  margin-top: 50px;
  transition: filter ease 0.5s;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;

export const StImage: any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    object-fit: contain;
    max-width: 50vw;
    width: 100%;
    border-radius: 20px;
    filter: ${(props: any) => (props.disabled ? "saturate(0%)" : "unset")};
  }
`;

export const StTextWrapper: any = styled.div`
  text-align: ${(props: any) => (props.align === "center" ? "center" : "left")};

  h1 {
    color: #020202;
  }
  h2 {
    margin-bottom: unset;
    color: ${(props) => (props.color === "light" ? "white" : props.color)};
  }
  p,
  h3 {
    color: ${(props) => (props.color === "light" ? "white" : props.color)};
    opacity: ${(props) => (props.color === "light" ? 0.75 : 1)};
    font-weight: ${(props: any) => (props.fat ? 'bolder' : 400)};
    margin: 10px 0 30px 0;
  }
  a {
    color: ${(props) => (props.color === "light" ? "white" : props.color)};
    font-weight: ${(props: any) => (props.fat ? 600 : 400)};
  }
`;

export const StOverlay: any = styled.div`
  position: fixed;
  background-color: ${(props: any) => (props.nsfw ? "#222" : "fff")};
  background-image: ${(props: any) => `url(${props.bgImgSrc})`};
  /* background-blend-mode: multiply; */
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow-x: hidden;
  text-align: right;
  opacity: ${(props: any) => props.show};
  visibility: ${(props: any) => (props.show ? "visible" : "hidden")};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out,
    background-color 1s;
  z-index: 10;
`;

export const StButton: any = styled.button`
  font-weight: 600;
  cursor: pointer;
  right: 0;
  z-index: 11;
  position: ${(props: any) => (props.fixed ? "absolute" : "relative")};
  min-width: 100px;
  width: ${(props: any) => (props.size === "small" ? "20%" : "100%")};
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  color: ${(props: any) => (props.color === "light" ? stdBlue : "white")};
  background-color: ${(props: any) =>
    props.color === "light"
      ? "white"
      : props.color === "warn"
      ? "#ec6662"
      : props.color
      ? props.color
      : "lightgrey"};
  transition: background-color 0.175s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  :active,
  :hover {
    color: lightgrey;
    background-color: grey;
    svg,
  path,
  line,
  polyline{
    color: lightgrey;

  }
  }
  :disabled {
    background-color: #ebebeb;
    cursor: not-allowed;
    color: lightgrey;
  }
`;

export const StUploadField: any = styled.div`
  overflow: hidden;
  border-radius: 20px;
  height: fit-content;
  max-height: 60vh;
  background-color: lightgrey;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  #uButton {
    width: 100%;
    height: 60vh;
    border: none;
    padding: 30px;
    background-color: ${stdBlue};
    cursor: pointer;
    transition: background-color ease-in-out 0.5;

    :active {
      background-color: grey;
    }
  }

  #file-input {
    display: none;
  }

  img,
  canvas {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  #resultsButton {
    background-color: ${stdBlue};
    cursor: pointer;
    transition: background-color linear 0.175s;
    :disabled {
      cursor: not-allowed;
      background-color: darkgray;
    }
    :active {
      background-color: grey;
    }
  }
`;

export const StFaceBox: any = styled.div`
  //width: ${(props: any) => `${props.width}px`};
  //height: ${(props: any) => `${props.height}px`};

  width: 18px;
  height: 18px;
  left: ${(props: any) => `${props.left}px`};
  top: ${(props: any) => `${props.top - 9}px`};
  cursor: pointer;
  position: absolute;
  border-radius: 100px;
  background-color: ${(props: any) =>
    props.clicked ? stdBlue : "rgba(255, 255, 255, 0.5)"};
  z-index: 12;
  :hover,
  :active,
  :focus {
    background-color: ${stdBlue};
  }
`;

export const StDetailData = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StIcon: any = styled.div`
  svg,
  path,
  line,
  polyline {
    color: ${(props: any) => (props.color ? props.color : "white")};
    height: ${(props: any) => (props.size ? props.size : "48px")};
    width: ${(props: any) => (props.size ? props.size : "48px")};
    //cursor: pointer;
  }
`;

export const override = css`
  display: block;
  position: absolute;
  top: 45%;
  margin: 0 auto;
  border-color: ${stdBlue};
`;

export const StPopIn: any = styled.div`
  z-index: 18;
  position: fixed;
  visibility: ${(props: any) => (props.show ? "visible" : "hidden")};
  width: 100vw;
  right: 0;

  #popinBackground {
    z-index: 19;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: ${(props: any) => (props.show ? 1 : 0)};
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    cursor: pointer;
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  #DetailPopIn {
    z-index: 20;
    top: 15vh;
    transform: ${(props: any) =>
      props.show ? "translateY(0)" : "translateY(90vh)"};
    overflow: scroll;
    height: 100vh;
    padding: 0 45px !important;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .textField {
    padding-top: 10px;
    border-radius: 20px;
    border-style: solid;
    border-width: 2px;
    border-color: #ececec;
    width: 100%;
    min-height: 200px;
    overflow: hidden;
  }

  .message {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 90%;
    border-radius: 20px;
    border-bottom-right-radius: 3px;
    background-color: ${stdBlue};
    color: white;

    padding: 10px 15px;

    margin: 0;
    margin-right: 10px;
    margin-left: 30%;

    p {
      margin: 0;
    }
  }

  .littleText {
    font-size: small;
    font-weight: bold;
    margin: 10px 0 40px 0;
    margin-left: calc(100% - 5rem);
    position: relative;
    color: lightgrey;
    width: max-content;
  }
`;

export const StExplanaition: any = styled.div`
  p {
    margin: 0;
    color: ${(props: any) => (props.nsfw ? "white" : "grey")};
    transition: color 1s;
  }
  #infoTextContainer {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    margin-bottom: 15px;
    padding: 10px 20px;

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const StInfoPopUp: any = styled.div`
  width: calc(90% - 40px);
  left: calc(5% + 20px);
  bottom: 20%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 16px 20px rgba(0, 0, 0, 0.2);
  position: fixed;
  visibility: ${(props: any) => (props.show ? "visible" : "hidden")};
  opacity: ${(props: any) => (props.show ? 1 : 0)};
  transition: all 0.4s;
  z-index: 25;
`;

export const StReloadInfo: any = styled.div`
  top: calc(50vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  z-index: 30;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  margin-left: calc(50% - 75px);
  opacity: 0;
  opacity: ${(props: any) => (props.show ? 1 : 0)};
  p {
    margin-top: 10px;
    margin-bottom: 0;
  }
`;

export const StCookieFloaty = styled(StButton)`
min-width: unset;
padding: unset;
width: 60px;
height: 60px;
background-color: white;
border-radius: 20px;
left: 0;
bottom : 0;
position: fixed;
margin : 15px;
`