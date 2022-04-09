import React from "react";
import styled from 'styled-components'
import Logo from "../assets/logo.png"
import Button from "./Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavbarTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 9%;
  background-color: #292D3E;
  font-family: Roboto, sans-serif
`
const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
`
const NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`
const NavItem = styled.div`
  display: flex;
  cursor: pointer;
`
const LogoContainer = styled.div`
  width: 55px;
`
const Img = styled.img`
  width: 73px;
`


const Navbar = ({
}) => {


  return (
    <Router>
      <NavbarTop>
        <SectionContent>
          <LogoContainer>
            <Img src={Logo}/>
          </LogoContainer>
          <NavItemsContainer>
            <Link to="/"><NavItem>Acceuil</NavItem></Link>
            <Link to="/About"><NavItem>A propos</NavItem></Link>
            <Link to="/Profil"><NavItem>Profil</NavItem></Link>
            <Button
              text={"Connexion"}
              backgroundColor={""}
              textColor={"#FFFFFF"}
              isHoverActive={true}
              hoverColorText={"black"}
              IsHoverBackgroundWhite={true}
              borderColor={"#FFFFFF"}
            />
          </NavItemsContainer>
        </SectionContent>
      </NavbarTop>
    </Router>
  )
}

export default Navbar