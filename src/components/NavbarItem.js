import React from "react";
import styled from "styled-components"

const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 40px;
  margin: 5px;
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
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100px;
    height: 50px;
    font-size: 22px;  
  }
`

const NavbarItem = ({
  text,
}) => {
  return (
    <NavItem>{text}</NavItem>
  )
}

export default NavbarItem