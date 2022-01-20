import styled from "styled-components";

const StUploadButton = styled.span`
  button {
      border-radius: ${props => props.theme.base.button.borderRadius};
    width: 100%;
    min-height: 100%;
    background-color: white;
    border: none;
    box-shadow: ${(props) => props.theme.base.shadow};
    cursor: pointer;
  }
  #imageInput {
    display: none;
  }
`;

export default StUploadButton;
