import styled from "styled-components";

const StUploadButton = styled.span`
  button {
    width: 100%;
    min-height: 100%;
    background-color: white;
    border: none;
    cursor: pointer;
    img {
      width: 200px;
      height: 200px;
    }
  }
  #imageInput {
    display: none;
  }
`;

export default StUploadButton;
