import styled from "styled-components";

const StUploadImage = styled.span`
  border-radius: ${(props) => props.theme.base.container.borderRadius};
  width: 100%;
  height: 100%;
  img {
      width: inherit;
      height: inherit;
    object-fit: contain;
  }
`;

export default StUploadImage;
