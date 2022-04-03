import React from "react";
import styled from 'styled-components'
import Logo from "../assets/logo.png"
import Button from "./Button";

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
  width: 80%;
  color: white;
`
const NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;
`
const NavItem = styled.div`
  display: flex;
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
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <Button
            text={"Connexion"}
            backgroundColor={""}
            textColor={"#FFFFFF"}
            isHoverActive={true}
            borderColor={"#FFFFFF"}
          />
        </NavItemsContainer>
      </SectionContent>
    </NavbarTop>
  )
}

export default Navbar