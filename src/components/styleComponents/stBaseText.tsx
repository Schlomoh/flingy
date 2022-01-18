import styled from "styled-components";

const StBaseText = styled.span`
  h1 {
    font-size: ${(props) => props.theme.base.text.fontSize.heading};
    color: ${(props) => props.theme.base.text.color.heading};
  }

  h2 {
    font-size: ${(props) => props.theme.base.text.fontSize.subHeading};
    color: ${(props) => props.theme.base.text.color.subHeading};
    margin: 10px 0 30px 0;
  }

  h3 {
    font-size: ${(props) => props.theme.base.text.fontSize.smallHeading};
    color: ${(props) => props.theme.base.text.color.smallHeading};
    margin-top: 40px;
  }

  p,
  a {
    font-size: ${(props) => props.theme.base.text.fontSize.paragraph};
    color: ${(props) => props.theme.base.text.color.paragraph};
    text-decoration: none;
    margin: 25px 0;
  }
`;

export default StBaseText;
