import styled from "styled-components";

const StUploadImage = styled.div`
  width: 100%;
  height: 100%;
  #uploadImage {
    width: inherit;
    height: inherit;
    object-fit: contain;
    transform: translateY(calc(-100.5% - 80px));
  }

  #imageBG {
    width: calc(100% + 80px);
    height: calc(100% + 80px);
    transform: translate(-40px, -40px);
    filter: blur(20px);
  }
`;

export default StUploadImage;
