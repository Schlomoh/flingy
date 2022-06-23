import styled from "styled-components";

const StUploadButton = styled.span`
  button {
    width: 100%;
    min-height: 100%;
    background-color: white;
    border: none;
    padding: 30px;
    cursor: pointer;

    img {
      width: 200px;
      height: 200px;
      margin: 0 0 20px 10px;
    }
  }
  #imageInput {
    display: none;
  }
`;

export default StUploadButton;
