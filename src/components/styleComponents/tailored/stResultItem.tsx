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
  align-items: center;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    margin-bottom: 10px;
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
  .imgWrapper {
    width: 76px;
    height: 76px;
    margin-right: 20px;
  }

  .chip {
    min-width: 50px;
    padding: 5px 10px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 40px;
    color: white;
    background-color: #8353e3;
    p {
      margin: 0;
      text-align: center;
    }
  }
  .chipContainer {
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
  }
`;

export default StResultItem;
