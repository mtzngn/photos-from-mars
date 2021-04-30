import React from 'react';
import styled from "styled-components";
import Curiosity from '../../assets/Curiosity.jpg' ;
import opportunity from '../../assets/opportunity.jpg' ;
import Spirit from '../../assets/Spirit.jpg' ;

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
        background-color: rgba(0,0,0,0.7);
        width: 100%;
        height: 100%;
        border-radius: 40px;
        transition: .5s ease;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 4px 4px rgba(0,0,0,0.25),
        0 0 16px 24px rgba(255,255,255,0.1),
        0 0 16px 12px rgba(255,255,255,0.1);
        cursor: pointer;
        h3 {
            letter-spacing: 3px;
        }

    }
}



@media (hover) {
    .container:hover {
    transform: scale(1.1);
    transition: 1s ease-in-out;
    }
    .overlay {
        opacity:0;
    }
    .container:hover .overlay {
    opacity: 1;
}
}


}
@media(min-width: 1024px) {
    .card-wrapper {
        height: 60vh;
        width: 80vw;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    h2{
        position: relative;
        top: 15vh;
        z-index: 10;
        font-size: 2em;
        font-weight: lighter;
    }
}
`

const ChooseRover = ({ setCount, setRover}) => {
    const rovers = [
        {name1: "curiosity", src: `${Curiosity}`},
        {name1: "opportunity", src: `${opportunity}`},
        {name1: "spirit", src: `${Spirit}`}
    ];
    const handleClick = (e) => {
        setCount(count => count + 1)
        setRover(e.target.id)
    }
    return (
        <StyledChooseRover >
            <h2>Choose a Rover</h2>
            <div className="card-wrapper">
            {rovers.map((rover, i)=>{
                return(
                    <div className="wrapper" key={i} >
                        <div className="container" key={i + 5}>
                            <img src={rover.src} alt="Rover Curiosity" className="img" key={i + 10}/>
                            <div className="overlay" key={i +15} onClick={handleClick} id={rover.name1}>
                                <h3 id={rover.name1}>{rover.name1}</h3>
                            </div>
                        </div>
                    </div>
            )})}
            </div>
        </StyledChooseRover>
    )
}
export default  ChooseRover;