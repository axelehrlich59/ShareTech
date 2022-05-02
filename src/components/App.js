import React from "react";
import Navbar from "./Navbar.js"
import About from "./About.js";
import Profil from "./Profil.js";
import Connection from "./Connection.js";
import Home from "./Home.js";
import PublishArticle from "./PublishArticle/index.js";
import styled from 'styled-components'
import '../index.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Inscription from "./Inscription.js";


const MainContainer = styled.div`
  margin: 0;
  font-family: 'DM Sans';
  height: 100vh;
  overflow: auto;
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
          <Route path="/Post" element={<PublishArticle />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Connexion" element={<Connection />} />
          <Route path="/Inscription" element={<Inscription />} />
        </Routes>
      </Router>
      <Home />
    </MainContainer>
  );
}

export default App;
