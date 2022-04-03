import React from "react";
import Navbar from "./Navbar.js"
import styled from 'styled-components'
import '../index.css'

const MainContainer = styled.div`
  margin: 0;
  height: 100vh;
`

function App() {
  return (
    <MainContainer>
      <Navbar 
      />
    </MainContainer>
  );
}

export default App;
