import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import Curiosity from '../assets/Curiosity.jpg' ;
import opportunity from '../assets/opportunity.jpg' ;
import Spirit from '../assets/Spirit.jpg' ;


const StyledDisplayImages = styled.div`
width: 100%;
height: fit-content;
z-index: 10;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
hr{
    display: none;
    width: 95%;
    border: 1px solid #000;
    margin: 0;
    margin-top: 10px;

}
.info {
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
}

.update {
    height: 5vh;
    width: 80%;
    background-color: #144552;
    display: flex;
    margin-top: 20px;
    .selections {
        width: 75%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        select {
            width: 25%;
            height: 30px;
            background-color: #3E1F47;
            border: none;
            color: #fff;
        }
        input {
            width: 25%;
            height: 30px;
            background-color: #3E1F47;
            border: none;
            color: #fff;
        }
        select:hover {
            cursor: pointer;
        }
    }
    .button-wrapper {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            width: 120px;
            height: 30px;

            font-size: 1em;
            color: #fff;
            background-color: #3E1F47;
            box-shadow: none;
            border: none;
        }

        button:hover {
                cursor: pointer;
                box-shadow: 4px 4px 8px rgba(0,0,0,0.5);
                transform: scale(1.1);
                transition: 0.3s ease;
            }
        button:active {
                transform: scale(0.9);
                box-shadow: 0px 0px 2px 2px rgba(62,31,71,0.2),
                0px 0px 3px 4px rgba(62,31,71,0.5),
                inset 2px 2px 4px rgba(0,0,0,0.3);
            }
    }
}
.display {
    margin-top: 20px;
    height: 15vh;
    img {
        height: 300px;
        width: 300px;
    }
}
@media(min-width: 768px) {
    .display {
    margin-top: 20px;
    height: 15vh;
        img {
            height: 400px;
            width: 400px;
        }
    }
    hr, .info {
    display: flex;
    }

}
@media(min-width: 1024px) {
    .display {
    margin-top: 40px;
    height: fit-content;
        img {
            height: 100%;
            width: 100%;
        }
    }


}

`

const DisplayImages = ({ rover, setRover, sol, setSol, cam, setCam}) => {
    const [query, setQuery] = useState("");
    const isFirstRender = useRef(true);
    const [photos, setPhotos] = useState([]);
    const [details, setDetails] = useState({});


    const getData = async() => {
        try {
            let response = await fetch(query);
            let data =  await response.text();
            let dataJ = JSON.parse(data)
            console.log(dataJ.photos[0].rover)
            setPhotos(...photos, dataJ.photos)
            setDetails(dataJ.photos[0].rover)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(()=>{
        if (!isFirstRender.current) {
            getData()
        }
    }, [query]);

    useEffect(()=>{
        setQuery(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=fhaz&api_key=ETnTGuuEA1M9BtNvM7VDEb3IWGICyDLKwL2fc4mY`);
        isFirstRender.current = false;
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleRoverChange = (e) => {
        setRover(e.target.value)
    }
    const handleSolChange = (e) => {
        setSol(e.target.value)
    }
    const handleCamChange = (e) => {
        console.log(e.target.value)
    }



    return (
        <StyledDisplayImages>
            <div className="info">
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
                    {(rover === "curiosity") ? <img src={Curiosity}></img> :
                    (rover === "opportunity") ? <img src={opportunity}></img> : <img src={Spirit}></img>}
                </div>
            </div>
            <hr/>
            <div className="update">

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

            </div>
            <div className="display">
                {(photos.length > 1) && photos.map((photo) => {
                    return <img src={photo.img_src} key={photo.id}></img>
                })}
            </div>

        </StyledDisplayImages>
    )
}
export default  DisplayImages;
