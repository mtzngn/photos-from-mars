import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components"

const StyledDisplayImages = styled.div`
z-index: 10;
position: relative;
`

const DisplayImages = ({ rover, setRover, sol, setSol, cam, setCam}) => {
    const [query, setQuery] = useState("");
    const isFirstRender = useRef(true)

    const getData = async() => {
        console.log("how?")
        try {
            let response = await fetch(query);
            let data =  await response.text();
            let dataJ = JSON.parse(data)
            console.log(dataJ)

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
            <h1 >Display Images here</h1>
        </StyledDisplayImages>
    )
}
export default  DisplayImages;

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=API_KEY=ETnTGuuEA1M9BtNvM7VDEb3IWGICyDLKwL2fc4mY

// const [state, setState] = useState({ name: "Michael" })
// const isFirstRender = useRef(true)

// useEffect(() => {
//   if (!isFirstRender.current) {
//     console.log(state) // do something after state has updated
//   }
// }, [state])

// useEffect(() => { 
//   isFirstRender.current = false // toggle flag after first render/mounting
// }, [])