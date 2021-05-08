import React from 'react';
import styled from "styled-components";
import Curiosity from '../../assets/Curiosity.jpg' ;
import opportunity from '../../assets/opportunity.jpg' ;
import Spirit from '../../assets/Spirit.jpg' ;
import Card from '../Card'

const StyledChooseRover = styled.div`
z-index: 10;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`

const ChooseRover = ({ setCount, setRover}) => {
    const rovers = [
        {name1: "curiosity", detail: "Some information about the rover in here basic and short pls", src: `${Curiosity}`},
        {name1: "opportunity", detail: "Some information about the rover in here basic and short pls", src: `${opportunity}`},
        {name1: "spirit", detail: "Some information about the rover in here basic and short pls", src: `${Spirit}`}
    ];
    const handleClick = (e) => {
        setCount(count => count + 1)
        setRover(e.target.id)
    }
    return (
        <StyledChooseRover >
            <h2>Choose a Rover</h2>
            <div className="card-wrapper">
            {rovers.map((rover,i) => {
                return (
                    <Card title={rover.name1} detail={rover.detail} src={rover.src} setCount={setCount} setRover={setRover} />
                )
            })}
            </div>
        </StyledChooseRover>
    )
}
export default  ChooseRover;