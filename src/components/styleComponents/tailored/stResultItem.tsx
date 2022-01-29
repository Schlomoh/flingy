import styled from "styled-components"

const StResultItem = styled.div`
    border-radius: ${(props) => props.theme.button.borderRadius.outer};
    box-shadow: ${(props) => props.theme.shadow};
    background-color: white;
    width: 100%;
    min-height: 50px;
    padding: 20px;
    `

export default StResultItem