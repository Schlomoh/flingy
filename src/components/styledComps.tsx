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

export const StOverlay: any = styled.div`
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

export const StFaceBox: any = styled.div`
  //width: ${(props: any) => `${props.width}px`};
  //height: ${(props: any) => `${props.height}px`};

  width: 18px;
  height: 18px;
  left: ${(props: any) => `${props.left - 9}px`};
  top: ${(props: any) => `${props.top - 9}px`};
  cursor: pointer;
  position: absolute;
  border-radius: 100px;
  background-color:${(props: any)=>props.clicked ? stdBlue : 'rgba(255, 255, 255, 0.5)' };
  z-index: 12;
  :hover, :active, :focus {
    background-color: ${stdBlue};
  }
`;

export const StDetailData = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StIcon = styled.div`
  svg,
  path,
  line,
  polyline {
    color: ${(props: any) => (props.color ? props.color : "white")};
    height: 48px;
    width: 48px;
    cursor: pointer;
  }
`;

export const override = css`
  display: block;
  margin: 0 auto;
  border-color: ${stdBlue};
`;

export const StPopIn: any = styled.div`
  position: fixed;
  z-index: 20;
  visibility: ${(props: any) => (props.show ? "visible" : "hidden")};
  transform: ${(props: any) =>
    props.show ? "translateY(0)" : "translateY(500px)"};
  width: 100vw;
  right: 0;
  height: 600px;
  border-radius: 20px;
  top: 40vh;
  background-color: white;
  filter: drop-shadow(0 16px 20px rgba(0, 0, 0, 0.2));
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    visibility 0.5s;
`;
