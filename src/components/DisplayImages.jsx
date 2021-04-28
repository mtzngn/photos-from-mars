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
            padding: 10px;
            width: 200px;
            height: 200px;
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

        }
    }
    .button-wrapper {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
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
                <div className="selections">
                    <select name="rover"></select>
                    <select name="sol"></select>
                    <select name="camera"></select>
                </div>
                <div className="button-wrapper">
                    <button>Update</button>
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
