import React from 'react'
import styled from "styled-components";
import Curiosity from '../../assets/Curiosity.jpg' ;
import opportunity from '../../assets/opportunity.jpg' ;
import Spirit from '../../assets/Spirit.jpg' ;

const StyledinfoSection =  styled.div`

min-height: 20vh;
width: 95%;
display: none;
justify-content: space-evenly;

.details {
    width: 70%;
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: space-evenly;
    .line {
        width: 100%;
        display: flex;
        gap: 20px;
    }
    p {
        margin: 0;
    }
}
.img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin-top: 10px;
        width: 200px;
        height: 200px;
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.5);

    }
}
@media(min-width: 768px) {
    hr, .info {
    display: flex;
    }
}
`


const InfoSection = ({ details, sol, rover }) => {
    return (
        <StyledinfoSection>
        <div className="details">
            <div className="line">
                <p>Name of the Rover:</p>
                <p>{details.name}</p>
            </div>
            <div className="line">
                <p>Landing Date:</p>
                <p>{details.landing_date}</p>
            </div>
            <div className="line">
                <p>Launch Date:</p>
                <p>{details.launch_date}</p>
            </div>
            <div className="line">
               <p>Number of Days in Mars:</p> 
               <p>{sol}</p>
            </div>
            <div className="line">
                <p>Mission Status:</p>
                <p>{details.status}</p>
            </div>
        </div>
        <div className="img-wrapper">
            {(rover === "curiosity") ? <img src={Curiosity} alt="curiosity rover"></img> :
            (rover === "opportunity") ? <img src={opportunity} alt="opportunity rover"></img> : <img src={Spirit} alt="spirit rover"></img>}
        </div>
    </StyledinfoSection>
    )
}
export default InfoSection;