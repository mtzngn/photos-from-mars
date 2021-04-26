import React, { useState }  from 'react';
import EnterSol from "./EnterSol"
import ChooseCamera from "./ChooseCamera"
import DisplayImages from "./DisplayImages"
import styled from "styled-components";
import Curiosity from '../assets/Curiosity.jpg' ;
import opportunity from '../assets/opportunity.jpg' ;
import Spirit from '../assets/Spirit.jpg' ;


const ChooseRover = styled.div`
height: 90vh;;
width: 80%;
background-color: #1B3A4B;
margin-top: 20px;

h2{
    margin: 0;
    padding: 10px;
    display: ${ ({ chooseRover }) => chooseRover  ? 'block' : 'none'};

}
.wrapper {
    display: ${ ({ chooseRover }) => chooseRover  ? 'flex' : 'none'};
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
    const [rover, setRover] = useState("")
    const rovers = [
        {name1: "Curiosity", src: `${Curiosity}`},
        {name1: "Opportunity", src: `${opportunity}`},
        {name1: "Spirit", src: `${Spirit}`}
    ];
    const [chooseRover, setChooseRover] = useState(true);
    const [chooseSol, setChooseSol] = useState(false);
    const [chosseCamera, setChooseCamera] =useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setRover(e.target.id)
        setChooseRover(false);
    }
    return (
        <>
        <ChooseRover chooseRover = {chooseRover}>
            <h2>Choose a Rover</h2>
            {chooseRover  && rovers.map((rover, i)=>{
                return(
                    <div className="wrapper" key={i} >
                        <div className="container" key={i + 5}>
                            <img src={rover.src} alt="Rover Curiosity" className="img" key={i + 10}/>
                            <div className="overlay" key={i +15} onClick={handleClick} id={rover.name1}>{rover.name1}</div>
                        </div>
                    </div>
            )})}
        </ChooseRover>
        {!chooseRover && <EnterSol setChooseSol={setChooseSol} />}
        {chooseSol && <ChooseCamera setChooseCamera={setChooseCamera}/>}
        {chosseCamera && <DisplayImages/>}
        </>
    )
}
