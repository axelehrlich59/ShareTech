import React from "react";
import Navbar from "./Navbar.js"
import About from "./About.js";
import Profil from "./Profil.js";
import Connection from "./Connection.js";
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
  @media screen and (max-width: 720px) {
    width: 100%;
  }
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
          <Route path="/Connexion" element={<Connection />} />
        </Routes>
      </Router>
    </MainContainer>
  );
}

export default App;
