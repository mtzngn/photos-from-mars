import React from 'react';
import styled from "styled-components";

const StyledUpdateSection = styled.div`

height: 5vh;
width: 80%;
background-color: #144552;
display: flex;
margin-top: 20px;
.selections {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.6em;

    select {
        width: 20%;
        height: 20px;
        background-color: #3E1F47;
        border: none;
        color: #fff;
    }
    input {
        width: 20%;
        height: 20px;
        background-color: #3E1F47;
        border: none;
        color: #fff;
    }
    select:hover {
        cursor: pointer;
    }

    input:focus, select:focus {
        box-shadow: 0 0 8px 4px #3E1F47,
        0 0 2px 2px rgba(0,0,0,0.3);
        outline: none;

    }
}
.button-wrapper {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button{
        width: 60px;
        height: 20px;

        font-size: 0.6em;
        color: #fff;
        background-color: #3E1F47;
        box-shadow: none;
        border: none;
        }

    button:hover {
            cursor: pointer;
            box-shadow: 4px 4px 8px rgba(0,0,0,0.5);
            transform: scale(1.05);
            transition: 0.3s ease;
    }
    button:active {
            transform: scale(0.9);
            box-shadow: 0px 0px 2px 2px rgba(62,31,71,0.2),
            0px 0px 3px 4px rgba(62,31,71,0.5),
            inset 2px 2px 4px rgba(0,0,0,0.3);
    }
    button:focus {
        box-shadow: 0 0 8px 4px #3E1F47,
        0 0 2px 2px rgba(0,0,0,0.3);
        outline: none;
    }
}
@media(min-width: 768px) {
    .update{
        .selections {
        font-size: 1em;

        select {
            width: 25%;
            height: 30px;

        }
        input {
            width: 25%;
            height: 30px;
        }
        }
        .button-wrapper {
            justify-content: center;
            button{
                width: 80px;
                height: 30px;
                font-size: 1em;
            }
        }
    }

}
`

const UpdateSection = ({ setQuery, rover, setRover, sol, setSol, cam, setCam}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery( query => `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${cam}&api_key=ETnTGuuEA1M9BtNvM7VDEb3IWGICyDLKwL2fc4mY`);
    }

    const handleRoverChange = (e) => {
        setRover(e.target.value)
    }
    const handleSolChange = (e) => {
        setSol(e.target.value)
    }
    const handleCamChange = (e) => {
        setCam(e.target.value)
    }

    return (
        <StyledUpdateSection>

        <form onSubmit={handleSubmit} className="selections">
            <select name="rover" onChange={handleRoverChange}>
                <option value="curiosity">curiosity</option>
                <option value="opportunity">opportunity</option>
                <option value="spirit">spirit</option>
            </select>
            <input type="number" required min="0" onChange={handleSolChange}></input>
            <select name="camera" onChange={handleCamChange}>
                <option value="fhaz">Front Hazard Avoidance</option>
                <option value="rhaz">Rear Hazard Avoidance</option>
                <option value="mardi">Mars Descent Imager</option>
                <option value="navcam">Navigation</option>

                {rover !== "curiosity" ? 
                <option value="pancam">Panoramic</option> :
                <>
                <option value="mast">Mast</option>
                <option value="chemcam">Chemistry and Camera Complex</option>
                <option value="mahli">Mars Hand Lens Imager</option>
                </> 
                }

            </select>
        </form>
        <div className="button-wrapper">
            <button onClick={handleSubmit}>Update</button>
        </div>

    </StyledUpdateSection>
    )
}

export default UpdateSection;
