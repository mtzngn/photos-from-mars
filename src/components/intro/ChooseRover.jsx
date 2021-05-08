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

.card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@media (min-width: 1024px) {
    .card-wrapper {
        flex-direction: row;
        gap: 50px;    
    }
}

`

const ChooseRover = ({ setCount, setRover}) => {
    const rovers = [
        {name1: "curiosity", detail: "Is a car-sized Mars rover designed to explore the Gale crater on Mars. Launched from Cape Canaveral on 26 Nov 2011, landed on Mars 6 Aug 2012.", src: `${Curiosity}`},
        {name1: "opportunity", detail: "Also known MER-B or MER1. It is a robotic rover nicked name 'Oppy'. Launched on 7 Jul 2003 and it landed in Meridiani Planum on 25 Jan 2004.", src: `${opportunity}`},
        {name1: "spirit", detail: "Also known MER-A or MER2. It is a robotic rover, twin of opportunity. Launched on 10 Jun 2003 and it landed within crater Gusev on 4 Jan 2004.", src: `${Spirit}`}
    ];

    return (
        <StyledChooseRover >
            <h2>Choose a Rover</h2>
            <div className="card-wrapper">
            {rovers.map((rover,i) => {
                return (
                    <Card title={rover.name1} detail={rover.detail} src={rover.src} setCount={setCount} setRover={setRover} key={i}/>
                )
            })}
            </div>
        </StyledChooseRover>
    )
}
export default  ChooseRover;