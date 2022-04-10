import React, { useState } from "react";
import styled from 'styled-components'
import Logo from "../assets/network.png"
import Button from "./Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
  height: 8%;
  background-color: #292D3E;
  font-family: Roboto, sans-serif;
  top: 0;
  position: sticky;
  overflow: hidden;
  @media screen and (max-width: 720px) {
    width: 100%;
    height: 10%;
  }
`
const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    width: 20%;
  }
`
const NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 28%;
  @media screen and (max-width: 720px) {
    display: none;
  }
`
const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 40px;
  cursor: pointer;
  border: 1.5px solid white;
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
const BurgerIcon = styled.div`
  display: none;
  @media screen and (max-width: 720px) {
    display: flex;
    align-items: center;
    color: white;
    font-size: 25px;
    width: 10%;
  }
`
const BurgerMenuContainer = styled.div`
  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    top: 0;
    position: sticky;
    height: 25%;
    width: 100%;
    transition: 0.5s;
  }
`
const BurgerMenuItems = styled.div`
  @media screen and (max-width: 720px) {  
    background-color: #292D3E;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35%;
    font-size: 18px;
    font-weight: bold;
    font-family: Roboto, sans-serif;
  }
`

const StyledLinkLogo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center; 
  justify-content: space-between;
  width: 12%;
  margin-left: 5px;
`

const Img = styled.img`
  width: 53px;
  border-radius: 15%;
`
const TextLogo = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`



const Navbar = ({

}) => {

  const [showBurgerMenu, setShowBurgerMenu] = useState(false)

  const onClickBurgerIcon = () => {
    setShowBurgerMenu(previousState => !previousState)
  }

  return (
    <>
      <NavbarTop>
        <SectionContent>
          <StyledLinkLogo to="">
            <Img src={Logo}/>
            <TextLogo>ShareTech</TextLogo>
          </StyledLinkLogo>
          <NavItemsContainer>
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
        <BurgerIcon>
          <FontAwesomeIcon icon={faBars} onClick={onClickBurgerIcon}/>
        </BurgerIcon>
      </NavbarTop>
      {showBurgerMenu && <BurgerMenuContainer>
        <BurgerMenuItems>A propos</BurgerMenuItems>
        <BurgerMenuItems>Profil</BurgerMenuItems>
        <BurgerMenuItems>Connexion</BurgerMenuItems>
      </BurgerMenuContainer>}
    </>
  )
}

export default Navbar