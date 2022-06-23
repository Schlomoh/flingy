import styled from "styled-components";
import { preProcessFile } from "typescript";

const StBaseText = styled.span`
  h1 {
    font-size: ${(props) => props.theme.text.fontSize.heading};
    color: ${(props) => props.theme.text.color.heading};
    line-height: 1;
    margin: 0 0 15px 0;
  }

  h2 {
    font-size: ${(props) => props.theme.text.fontSize.smallHeading};
    color: ${(props) => props.theme.text.color.smallHeading};
    margin: 0 0 10px 0;
  }

  h3 {
    font-size: ${(props) => props.theme.text.fontSize.subHeading};
    color: ${(props) =>
      props.color ? props.color : props.theme.text.color.subHeading};
    margin: 0 0 20px 0;
  }

  p,
  a,
  img {
    font-size: ${(props) => props.theme.text.fontSize.paragraph};
    color: ${(props) =>
      props.color ? props.color : props.theme.text.color.paragraph};
    text-decoration: none;
    margin: 15px 0;
    line-height: 1.3;
  }

  img {
    font-size: 10px;
  }
`;

export default StBaseText;
