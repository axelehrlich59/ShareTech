import React from "react";
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import About from "./About.js";
import Profil from "./Profil.js";
import styled from 'styled-components'
import '../index.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const MainContainer = styled.div`
  margin: 0;
  height: 100vh;
`

function App() {
  return (
    <MainContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={""} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Profil" element={<Profil />} />
        </Routes>
      </Router>
    </MainContainer>
  );
}

export default App;
