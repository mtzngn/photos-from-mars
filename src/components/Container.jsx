import React, { useState }  from 'react';
import EnterSol from "./EnterSol"
import ChooseCamera from "./ChooseCamera"
import DisplayImages from "./DisplayImages"
import ChooseRover from "./ChooseRover"
import styled from "styled-components";


const StyledContainer = styled.div`
height: 90vh;;
width: 80%;
background-color: #1B3A4B;
margin-top: 10vh;
position: fixed;
z-index: 0;

`

export default function Container() {
    const [rover, setRover] = useState("");
    const [sol, setSol] = useState(0);
    const [cam, setCam] = useState("");
    const [count, setCount] = useState(0);


    const components = [
        <ChooseRover count={count} setCount={setCount} setRover ={setRover}/>,
        <EnterSol count={count} setCount={setCount}/>,
        <ChooseCamera count={count} setCount={setCount}/>,
        <DisplayImages />
    ]
    return (

        <StyledContainer>
        {
            components[count]
        }
        </StyledContainer>

    );
}
