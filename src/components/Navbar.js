import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Logo from "../assets/network.png"
import Button from "./Button";
import NavbarItem from "./NavbarItem";
import { Link, useLocation  } from "react-router-dom";
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
  font-family: 'DM Sans';
  top: 0;
  position: sticky;
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
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;  
    margin-right: 15px;
  }
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
  @media (min-width: 768px) and (max-width: 1024px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 720px) {
    display: none;
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
    font-family: 'DM Sans';
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
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 60px;
    margin-right: 10px;
  }
`
const TextLogo = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.6rem; 
  }
`



const Navbar = ({

}) => {

  const [showBurgerMenu, setShowBurgerMenu] = useState(false)
  const location = useLocation();

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
              {location.pathname !== "/AboutUs" && <NavbarItem text={"A propos"}/>}
            </StyledLink>
            <StyledLink className="styledLink" to="/Profil">
              {location.pathname !== "/Profil" && <NavbarItem text={"Profil"} />}
            </StyledLink>
            <StyledLinkButton to="/Connexion">
              {location.pathname !== "/Connexion" && <Button
                text={"Connexion"}
                backgroundColor={""}
                textColor={"#FFFFFF"}
                isHoverActive={true}
                hoverColorText={"black"}
                IsHoverBackgroundWhite={true}
                borderColor={"#FFFFFF"}
              />}
            </StyledLinkButton>
            <StyledLinkButton to="/Inscription">
              {location.pathname !== "/Inscription" && <Button
                text={"Inscription"}
                backgroundColor={""}
                textColor={"#FFFFFF"}
                isHoverActive={true}
                hoverColorText={"black"}
                IsHoverBackgroundWhite={true}
                borderColor={"#FFFFFF"}
              />}
            </StyledLinkButton>
          </NavItemsContainer>
        </SectionContent>
        <BurgerIcon>
          <FontAwesomeIcon icon={faBars} onClick={onClickBurgerIcon}/>
        </BurgerIcon>
      </NavbarTop>
      {showBurgerMenu && <BurgerMenuContainer>
        <BurgerMenuItems>
          <StyledLink to="/AboutUs">A propos</StyledLink>
        </BurgerMenuItems>
        <BurgerMenuItems>
          <StyledLink to="/Profil">Profil</StyledLink>
        </BurgerMenuItems>
        <BurgerMenuItems>
          <StyledLink to="/Connexion">Connexion</StyledLink>
        </BurgerMenuItems>
        <BurgerMenuItems>
          <StyledLink to="/Inscription">Inscription</StyledLink>
        </BurgerMenuItems>
        
      </BurgerMenuContainer>}
    </>
  )
}

export default Navbar