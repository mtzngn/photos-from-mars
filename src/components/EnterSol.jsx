import React, { useState } from 'react'
import styled from "styled-components"

const StyledEnterSol = styled.div`

`
export default function EnterSol({setChooseSol}) {

    const handleClick = () => {
        setChooseSol(true)
    }
    
    return (
        <StyledEnterSol >
            <h1 onClick={handleClick}>Enter sol number here</h1>
        </StyledEnterSol>
    )
}
