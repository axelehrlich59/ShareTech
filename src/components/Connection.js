import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import Button from "./Button";
import { Link } from "react-router-dom";

const MainContainerConnection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92%;
  font-family: 'DM Sans';
`
const ContainerConnection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 70%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
const MainContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
`
const ContainerItemConnection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80%;
`
const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 26px;
`
const ContainerInput = styled.input`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 15%;
  font-size: 16px;
  padding: 4px;
  border: 2px solid #292D3E;
  border-radius: 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 16px;
    padding: 7px;
  }
`
const ContainerConnectionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
`
const ContainerSmallText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const LinkToInscription = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: black;
`


const Connection = () => {

  return (
    <MainContainerConnection>
      <ContainerConnection>
        <MainContainerItems>
          <ContainerTitle>Bienvenue,</ContainerTitle>
          <ContainerItemConnection>
            <ContainerInput placeholder="Identifiant ou email"></ContainerInput>
            <ContainerInput placeholder="Mot de passe"></ContainerInput>
          </ContainerItemConnection>
          <ContainerSmallText>
            <small>Pas encore inscrit ? 
              <LinkToInscription to="/Inscription"> Cliquez ici</LinkToInscription>
            </small>
          </ContainerSmallText>
          <ContainerConnectionButton>
            <Button 
              text={"Connexion"}
              hideBorder={true}
              boxShadowIsActive={true}
            />
          </ContainerConnectionButton>
        </MainContainerItems>
      </ContainerConnection>
    </MainContainerConnection>
  )
}

export default Connection