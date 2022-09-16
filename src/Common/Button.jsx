import styled from "styled-components";

const Button = styled.button` 
display: flex;
width: 80%;
height: 50px;
background-color: ${props => props.color};
border-radius: 5px;
border: none;
color: white;
justify-content: center;
align-items: center;
font-weight: 700;
font-size: 16px;
margin-top: 10px;
`

export default Button;