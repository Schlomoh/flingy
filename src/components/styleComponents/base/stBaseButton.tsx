import styled from "styled-components";

function insertHover(css: string) {
  return `
  @media (hover: hover) {
    :hover{
      ${css}
    }
  }`;
}

const StBaseButton: any = styled.button`
  position: ${(props: any) => props.position};
  z-index: 3;
  border: none;
  padding: ${(props: any) => (props.padding ? props.padding : "10px")};
  margin: ${(props: any) => (props.margin ? props.margin : "20px")};
  height: 50px;
  width: calc(100%);
  box-shadow: ${(props) => props.theme.shadow};
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
  /* ${insertHover(`transform: scale(0.95);`)} */
  :active {
    transform: scale(0.95);
  }

  ${(props: any) => (props.bottom ? "bottom: 0;" : "")}
  ${(props: any) => (props.right ? "right: 0;" : "")}
  ${(props: any) =>
    props.inner
      ? `border-radius: ${props.theme.button.borderRadius.inner}`
      : props.round
      ? `border-radius: 100%; 
          width: ${props.round}px; height: ${props.round}px;`
      : props.small
      ? `border-radius : 100%; width: 30px; height: 30px; box-shadow: unset; color: grey; padding-top: 5px`
      : `border-radius: ${props.theme.button.borderRadius.outer}`};

  // colorway of button defined by the theme
  // uses single prop in the StBaseButton component (warn , disabled, primary)
  ${(props: any) =>
    props.warn
      ? `
    background-color: ${props.theme.button.warn.background};
    color: ${props.theme.button.warn.color};
       ${insertHover(
         `background-color: ${props.theme.button.warn.hover.background};
          color: ${props.theme.button.warn.hover.color};`
       )}
        ;`
      : props.disabled
      ? `
      cursor: not-allowed;
      background-color: ${props.theme.button.disabled.background};
      color: ${props.theme.button.disabled.color};
      :active{
        transform: unset;
      }
        `
      : `
        background-color: ${props.theme.button.primary.background};
        color: ${props.theme.button.primary.color};
        ${insertHover(
          `box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
          background-color: ${props.theme.button.primary.hover.background};
          color: ${props.theme.button.primary.hover.color};`
        )}
      `}
`;

export default StBaseButton;
