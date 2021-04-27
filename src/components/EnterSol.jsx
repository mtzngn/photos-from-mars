import React, { useState } from 'react'
import styled from "styled-components"

const StyledEnterSol = styled.div`
z-index: 10;
`
const EnterSol = ({ count, setCount}) => {

    const handleClick = () => {
        setCount(count => count + 1)
    }
    
    return (
        <StyledEnterSol >
            <h1 onClick={handleClick}>Enter sol number here</h1>
        </StyledEnterSol>
    )
}
export default EnterSol;