import React from "react";
import styled from 'styled-components'
import Logo from "../assets/logo.png"
import Button from "./Button";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
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
    <NavbarTop>
      <SectionContent>
        <LogoContainer>
          <Img src={Logo}/>
        </LogoContainer>
        <NavItemsContainer>
          <StyledLink to="/">
            <NavItem>Home</NavItem>
          </StyledLink>
          <StyledLink to="/AboutUs">
            <NavItem>A propos</NavItem>
          </StyledLink>
          <StyledLink to="/Profil">
            <NavItem>Profil</NavItem>
          </StyledLink>
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
  )
}

export default Navbar