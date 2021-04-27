import React from "react";
import styled from "styled-components"

const StyledButton = styled.button`
height: 80px;
width: 120px;
font-size: 1.5em;
color: #fff;
background-color: #3E1F47;
box-shadow: none;
border: none;
:hover {
    cursor: pointer;
    box-shadow: 4px 4px 8px rgba(0,0,0,0.5);
}
:active {
    transform: scale(0.9);
    box-shadow: 0px 0px 2px 2px rgba(62,31,71,0.2),
    0px 0px 3px 4px rgba(62,31,71,0.5),
    inset 2px 2px 4px rgba(0,0,0,0.3);

}
`
const Button = ({setCount}) => {
    const handleClick = () => {
        setCount(count => count + 1)
    }
    return (
        <StyledButton onClick={handleClick}>Next</StyledButton>
    )
}

export default Button;