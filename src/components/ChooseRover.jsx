import React from 'react';
import styled from "styled-components";
import Curiosity from '../assets/Curiosity.jpg' ;
import opportunity from '../assets/opportunity.jpg' ;
import Spirit from '../assets/Spirit.jpg' ;

const StyledChooseRover = styled.div`
z-index: 10;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2{
    margin: 0;
    padding: 10px;

}
.wrapper {
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
}}
`

const ChooseRover = ({ setCount, setRover}) => {
    const rovers = [
        {name1: "Curiosity", src: `${Curiosity}`},
        {name1: "Opportunity", src: `${opportunity}`},
        {name1: "Spirit", src: `${Spirit}`}
    ];
    const handleClick = (e) => {
        setCount(count => count + 1)
        setRover(e.target.id)
    }
    return (
        <StyledChooseRover >
            <h2>Choose a Rover</h2>
            {rovers.map((rover, i)=>{
                return(
                    <div className="wrapper" key={i} >
                        <div className="container" key={i + 5}>
                            <img src={rover.src} alt="Rover Curiosity" className="img" key={i + 10}/>
                            <div className="overlay" key={i +15} onClick={handleClick} id={rover.name1}>{rover.name1}</div>
                        </div>
                    </div>
            )})}
        </StyledChooseRover>
    )
}
export default  ChooseRover;