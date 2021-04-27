import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components"

const StyledDisplayImages = styled.div`
z-index: 10;
position: relative;
`

const DisplayImages = ({ rover, setRover, sol, setSol, cam, setCam}) => {
    const [query, setQuery] = useState("");
    const isFirstRender = useRef(true)
    const [photos, setPhotos] = useState([])

    const getData = async() => {
        try {
            let response = await fetch(query);
            let data =  await response.text();
            let dataJ = JSON.parse(data)
            console.log(dataJ)
            setPhotos(...photos, dataJ.photos)


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
            {(photos.length > 1) && photos.map((photo) => {
                return <img src={photo.img_src} key={photo.id}></img>
            })}
            <h1 >Display Images here</h1>
        </StyledDisplayImages>
    )
}
export default  DisplayImages;
