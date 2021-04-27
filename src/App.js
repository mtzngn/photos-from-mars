import styled from "styled-components"
import Container from "./components/Container"

const StyledApp = styled.div`
height: 100vh;
width: 100%;
background-color: #212F45;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
.title {
  height: 10vh;
}
h1 {
  margin: 0;
  padding-top: 10px;
  text-shadow: 1px 1px rgba(255,255,255,0.2);
}
hr{
color: #fff;
width: 80%;
}

`

const App = () => {
  return (
    <StyledApp>
      <div className="title">
        <h1>Photos From Mars App</h1>
        <hr></hr>
      </div>
      <Container/>
    </StyledApp>
  );
}

export default App;
