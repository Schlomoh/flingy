import styled from "styled-components";

const StFaceBox: any = styled.div`
  ${(props: any) => props.faceBox.size}
  ${(props: any) => props.faceBox.position}
  box-shadow: ${(props) => props.theme.base.shadow};
  z-index: 2;
  border: 5px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  position: absolute;
`;

export default StFaceBox;
