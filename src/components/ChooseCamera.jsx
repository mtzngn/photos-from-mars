import React from 'react';
import styled from "styled-components";

const StyledChooseCamera = styled.div`
height: 80vh;
width:100%;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
.wrapper {
    width:80%;
    border: 1px solid rgba(255,255,255,0.3);
    h4 {
        margin: 0;
        padding: 20px;
    }
}
.wrapper:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px 2px rgba(255,255,255,0.3);
    transform: translateY(-5px);
    transition: 0.3s ease-in-out;
}
@media(min-width: 656px) {
    .wrapper {
    width:60%;
    border: 1px solid rgba(255,255,255,0.3);
}
@media(min-width: 1024px) {
    .wrapper {
    width:40%;
    border: 1px solid rgba(255,255,255,0.3);
}
}}
`

export default function ChooseCamera({ rover, setCam, setCount }) {
    const cameras = [
        "Front Hazard Avoidance",
        "Rear Hazard Avoidance",
        "Mast",
        "Chemistry and Camera Complex",
        "Mars Hand Lens Imager",
        "Mars Descent Imager",
        "Navigation",
        "Panoramic",
    ]
    const curiosity = [0,1,2,3,4,5,6];
    const so = [0,1,5,6, 7] // spirit and oppportunity

    const handleClick = (e) => {
        setCam(e.target.textContent)
        setCount(count => count + 1)
    }
    return (
        <StyledChooseCamera>
            <h2>Choose a camera</h2>
            {(rover === "Curiosity") ? curiosity.map((i) =>{
                    return (
                        <div className="wrapper" key={i + 10}>
                            <h4 onClick={handleClick} key={i}>{cameras[i]}</h4>
                        </div>
                    )
                }) : so.map((i) =>{
                    return (
                        <div className="wrapper" key={i + 10}>
                            <h4 onClick={handleClick} key={i}>{cameras[i]}</h4>
                        </div>
                    )
                }) 
            }
        </StyledChooseCamera>
    )
}
