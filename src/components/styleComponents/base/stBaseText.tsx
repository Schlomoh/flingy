import styled from "styled-components";

const StBaseText = styled.span`
  h1 {
    font-size: ${(props) => props.theme.text.fontSize.heading};
    color: ${(props) => props.theme.text.color.heading};
    line-height: 1;
  }

  h2 {
    font-size: ${(props) => props.theme.text.fontSize.smallHeading};
    color: ${(props) => props.theme.text.color.smallHeading};
    margin: 0 0 25px 0;
  }

  h3 {
    font-size: ${(props) => props.theme.text.fontSize.subHeading};
    color: ${(props) => props.theme.text.color.subHeading};
    margin-top: 25px;
  }

  p,
  a {
    font-size: ${(props) => props.theme.text.fontSize.paragraph};
    color: ${(props) => props.theme.text.color.paragraph};
    text-decoration: none;
    margin: 30px 0;
    line-height: 1.3;
  }
`;

export default StBaseText;