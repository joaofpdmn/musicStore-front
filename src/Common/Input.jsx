import styled from "styled-components";

const Input = styled.input`
display: flex;
width: ${props => !props.width ? '90%' : props.width};
height: 50px;
margin-bottom: 20px;
border-radius: 5px;
border: none;
margin-inline-end: ${props => !props.margin ? '0px' : props.margin};
::placeholder{
    padding-left: 10px;
}
`

export default Input;