import React from 'react';
import styled from "styled-components";
import Curiosity from '../assets/Curiosity.jpg' ;
import opportunity from '../assets/opportunity.jpg' ;
import Spirit from '../assets/Spirit.jpg' ;


const StyledContainer = styled.div`
height: 90vh;;
width: 80%;
background-color: #1B3A4B;
margin-top: 20px;
h2{
    margin: 0;
    padding: 10px;
}
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    .container {
    position: relative;
    .img {
    display: block;
    width: 250px;
    height: 200px;
    border-radius: 40px;
    }
    .overlay {
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        border-radius: 40px;
        opacity:0;
        transition: .5s ease;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

    }
}
.container:hover .overlay {
    opacity: 1;
}
}


`

export default function Container() {
    return (
        <StyledContainer>
            <h2>Choose a Rover</h2>
            <div className="wrapper">
                <div className="container">
                    <img src={Curiosity} alt="Image of Rover Curiosity" className="curiosity img"/>
                    <div className="overlay">Curiosity</div>
                </div>
            </div>
            <div className="wrapper">
                <div className="container">
                    <img src={opportunity} alt="Image of Rover opportunity" className="curiosity img"/>
                    <div className="overlay">Opportunity</div>
                </div>
            </div>
            <div className="wrapper">
                <div className="container">
                    <img src={Spirit} alt="Image of Rover Spirit" className="curiosity img"/>
                    <div className="overlay">Spirit</div>
                </div>
            </div>

        </StyledContainer>
    )
}
