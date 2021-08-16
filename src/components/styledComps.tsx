import styled from "styled-components";
import { css } from "@emotion/react";

export const stdBlue = "#62bcec";

export const StCard = styled.div`
  background-color: #62bcec;
  border-radius: 20px;
  padding: 30px;
  margin-top: 50px;
  transition: filter ease 0.5s;
  filter: drop-shadow(0 5px 20px rgba(0, 0, 0, 0.2));
`;

export const StImage = styled.div`
  img {
    width: 40vw;
    max-width: 100%;
    height: auto;
    border-radius: 20px;
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
    font-weight: ${(props: any) => (props.fat ? 600 : 400)};
  }
`;

export const Overlay: any = styled.div`
  overflow-x: hidden;
  text-align: right;
  height: 100vh;
  width: 100%;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  opacity: ${(props: any) => props.show};
  visibility: ${(props: any) => (props.show ? "visible" : "hidden")};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
`;

export const StButton: any = styled.button`
  cursor: pointer;
  right: 0;
  z-index: 11;
  position: ${(props: any) => (props.fixed ? "fixed" : "relative")};
  margin-top: 15px;
  min-width: 100px;
  width: ${(props: any) => (props.size === "small" ? "20%" : "100%")};
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  color: ${(props: any) => (props.color === "light" ? "#62bcec" : "white")};
  background-color: ${(props: any) =>
    props.color === "light"
      ? "white"
      : props.color === "warn"
      ? "#ec6662"
      : "lightgrey"};
  transition: background-color 0.3s ease;
  filter: drop-shadow(0 5px 20px rgba(0, 0, 0, 0.1));
  :active {
    background-color: grey;
  }
`;

export const StImageUploadField: any = styled.div`
  button {
    border: none;
    height: 55vh;
    width: 100%;
    border-radius: 20px;
    padding: 30px;
    margin-top: 50px;
    background-color: ${stdBlue};
    cursor: pointer;
    filter: drop-shadow(0 5px 20px rgba(0, 0, 0, 0.2));
    transition: background-color ease-in-out 0.5;
    :active {
      background-color: grey;
    }
  }
  #file-input {
    display: none;
  }
`;

export const StImagePreview: any = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 50px;
  overflow: hidden;
  border-radius: 20px;
  background-color: lightgrey;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  filter: drop-shadow(0 5px 20px rgba(0, 0, 0, 0.2));
  transition: opacity ease 1s;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const FaceBox: any = styled.div`
  //width: ${(props: any) => `${props.width}px`};
  //height: ${(props: any) => `${props.height}px`};

  width: 15px;
  height: 15px;
  left: ${(props: any) => `${props.left }px`};
  top: ${(props: any) => `${props.top}px`};
  cursor: pointer;
  position: absolute;
  border-radius: 35px;
  background-color: white;
  z-index: 100;
  :hover {
    background-color: grey;
  }
`;

export const StDetailData = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 300px;
`;

export const StIcon = styled.div`
  svg,
  path,
  line,
  polyline {
    color: white;
    height: 48px;
    width: 48px;
    margin-bottom: 20px;
  }
`;

export const override = css`
  display: block;
  margin: 0 auto;
  border-color: ${stdBlue};
`;
