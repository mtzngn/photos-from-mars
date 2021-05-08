import React from 'react'
import styled from 'styled-components';

const clrNeutal900 = "hsl(207, 19%, 9%)";
const clrNeutal100 = "hsl(0, 0%, 100%)";
const clrAccent400 = "hsl(142, 90%, 61%)";
const padding = "1.5rem";

const StyledCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin-bottom: 5vh;

height: fit-content;
width: 100%;
.card {
    color: ${clrNeutal100};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;    
    padding: 10rem 0 0;
    max-width: 35ch;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: transform 500ms ease;
}

.card:hover,
.card:focus-within {
    transform: scale(1.05);
}

.card-content {
    padding: ${padding};
    background: linear-gradient(
        hsl(0 0% 0% / 0),
        hsl(0 0% 0% / 0.2) 20%,
        hsl(0 0% 0% / 1)
    );

}

.card-title {
    position:relative;
    width: max-content;
}

.card-title::after {
    content: '';
    position: absolute;
    height: 4px;
    left: calc(1.5rem * -1);
    bottom:-4px;
    width: calc(100% + 1.5rem);
    background: ${clrAccent400};
    transform-origin: left;
    transition: transform 500ms ease;
}

.card:hover .card-title::after,
.card:focus-within   .card-title::after {
    transform: scaleX(1);
}

.card-body {
    color: rbg(255 255 255 / 0.85);
}

.button {
    cursor: pointer;
    display: inline;
    text-decoration: none;
    border:none;
    color: ${clrNeutal900};
    background-color:${clrAccent400};
    padding: 1em 1.5em;
    border-radius: 0.25rem;

}

.button:hover,
.button:focus {
    background-color: ${clrNeutal100};
}

@media (hover) {
    .card-content {
        transform: translateY(55%);
        transition: transform 500ms ease;
    }
    .card:hover .card-content,
    .card:focus-within .card-content {
        transform: translateY(0);
        transition-delay: 500ms;
    }

    .card:focus-within .card-content {
        transition-duration: 0ms;
    }

    .card-content > *:not(.card-title) {
        opacity: 0;
        transition: opacity 500ms linear;
    }
    .card:hover .card-content > *:not(.card-title),
    .card:focus-within .card-content > *:not(.card-title) {
        opacity: 1;
        transition-delay: 500ms;
    }
    .card-title::After {
        transform: scaleX(0);

    }
}
@media (min-width: 1024px) {
    flex-direction: row;
}
`

 const Card = ( { title, detail, src, setCount, setRover } ) => {
    const handleClick = (e) => {
        setCount(count => count + 1)
        setRover(title)
    }
    return (
        <StyledCard>
            <div className="card" style={{ backgroundImage: `url(${src})` }}>
                <div className="card-content"  >
                <h2 className="card-title">{title}</h2>
                <p className="card-body">{detail}</p>
                <button className="button" onClick={handleClick}>Choose</button>
                </div>
            </div>
    </StyledCard>
    )
}

export default Card;
