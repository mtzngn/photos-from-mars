import React, { useState } from 'react'
import styled from "styled-components"
import TextInput from '@bit/learn-bit.react-demo-app.text-input';
import Button from './Button';



const StyledEnterSol = styled.div`
z-index: 10;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: space-around;

align-items: center;
.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .input {
        height: 60px;
        width: 90px;
        font-size: 2em;
    }
}
@media(min-width: 1024px) {
    .input-wrapper {
        justify-content: space-evenly;
    }
}
`
const EnterSol = ({ setCount}) => {

    return (
        <StyledEnterSol >
            <div className="title">
                <h2>Enter Sol</h2>
                <h3>Sol is the Martian rotation or day. Counting up  from the rover’s landing date.</h3>
            </div>
            <div className="input-wrapper">
                <TextInput className="input" type="number" min="0"/>
                <Button setCount={setCount}>Next</Button>
            </div>
        </StyledEnterSol>
    )
}
export default EnterSol;