import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import InfoSection from "./InfoSection"
import UpdateSection from "./UpdateSection"

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

.display {
    margin-top: 20px;
    height: 15vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        height: 300px;
        width: 300px;
        margin: 10px;
        box-shadow: 0 0 8px 4px rgba(0,0,0,0.5); 
    }
    img:hover {
        transform: scale(1.01);
        transition: 0.3s ease-in-out;
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
    hr {
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
            console.log(dataJ.photos.length)
            if (dataJ.photos.length !== 0) {
                setPhotos(dataJ.photos)
                setDetails(dataJ.photos[0].rover)
            } else {
                alert("No Photos found for choosen criterias")
            }
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
        setQuery(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${cam}&api_key=ETnTGuuEA1M9BtNvM7VDEb3IWGICyDLKwL2fc4mY`);
        isFirstRender.current = false;
    }, []);


    return (
        <StyledDisplayImages>
            <InfoSection details={details} sol={sol}/>
            <hr/>
            <UpdateSection setQuery={setQuery} rover={rover} setRover={setRover} sol={sol} setSol={setSol} cam={cam} setCam={setCam}/>
            <div className="display">
                {(photos.length > 1) && photos.map((photo) => {
                    return <img src={photo.img_src} key={photo.id} alt="from mars"></img>
                })}
            </div>
        </StyledDisplayImages>
    )
}
export default  DisplayImages;
