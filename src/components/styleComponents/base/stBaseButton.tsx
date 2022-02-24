import styled from "styled-components";

const StBaseButton: any = styled.button`
  position: ${(props: any) => props.position};
  z-index: 3;
  border: none;
  padding: 10px;
  margin: ${(props: any)=> props.margin ? `${props.margin}`: '20px'};
  height: 50px;
  width: calc(100%);
  box-shadow: ${(props) => props.theme.shadow};
  cursor: pointer;
  font-weight: bold;
  ${(props: any) => (props.bottom ? "bottom: 0;" : "")}
  ${(props: any) =>
    props.inner
      ? `border-radius: ${props.theme.button.borderRadius.inner}`
      : props.round
      ? `border-radius: ${props.theme.button.borderRadius.round}; 
          width: ${props.round}px; height: ${props.round}px;`
      : `border-radius: ${props.theme.button.borderRadius.outer}`};

  // colorway of button defined by the theme
  // uses single prop in the StBaseButton component (warn , disabled, primary)
  ${(props: any) =>
    props.warn
      ? `
    background-color: ${props.theme.button.warn.background};
    color: ${props.theme.button.warn.color};
        :hover{
            background-color: ${props.theme.button.warn.hover.background};
            color: ${props.theme.button.warn.hover.color};
        };`
      : props.disabled
      ? `
      cursor: not-allowed;
    background-color: ${props.theme.button.disabled.background};
    color: ${props.theme.button.disabled.color};
        `
      : `
        background-color: ${props.theme.button.primary.background};
        color: ${props.theme.button.primary.color};
            :hover{
                background-color: ${props.theme.button.primary.hover.background};
                color: ${props.theme.button.primary.hover.color};
            };
      `}
`;

export default StBaseButton;
