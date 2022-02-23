import styled from "styled-components";

const StResultItem = styled.div`
  border-radius: ${(props) => props.theme.button.borderRadius.outer};
  box-shadow: ${(props) => props.theme.shadow};
  background-color: white;
  min-height: 50px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  h3 {
    margin: 0;
  }
  img,
  canvas {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 100%;
    border: solid 2px lightgrey;
    box-sizing: border-box;
    margin: 8px;
  }
  #imgWrapper {
    width: 76px;
    height: 76px;
    margin-right: 20px;
  }
`;

export default StResultItem;
