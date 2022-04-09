import React from "react";
import styled from 'styled-components'
import Logo from "../assets/logo.png"
import Button from "./Button";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`

const StyledLinkButton = styled(Link)`
  text-decoration: none;
`

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
  width: 35%;
`
const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 40px;
  cursor: pointer;
  border: 1px solid white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  &:hover {
    transition: 0.3s;
    background-color: white;
    color: black;
  }
  
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  width: 5%;
`
const Img = styled.img`
  width: 55px;
  border-radius: 15%;
`


const Navbar = ({
}) => {


  return (
    <NavbarTop>
      <SectionContent>
        <LogoContainer>
          <Img src={Logo}/>
        </LogoContainer>
        <NavItemsContainer>
          <StyledLink className="styledLink" to="/">
            <NavItem>Home</NavItem>
          </StyledLink>
          <StyledLink className="styledLink" to="/AboutUs">
            <NavItem>A propos</NavItem>
          </StyledLink>
          <StyledLink className="styledLink" to="/Profil">
            <NavItem>Profil</NavItem>
          </StyledLink>
          <StyledLinkButton to="/Connexion">
            <Button
              text={"Connexion"}
              backgroundColor={""}
              textColor={"#FFFFFF"}
              isHoverActive={true}
              hoverColorText={"black"}
              IsHoverBackgroundWhite={true}
              borderColor={"#FFFFFF"}
            />
          </StyledLinkButton>
        </NavItemsContainer>
      </SectionContent>
    </NavbarTop>
  )
}

export default Navbar