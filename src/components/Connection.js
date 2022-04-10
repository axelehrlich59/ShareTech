import React from "react";
import styled from 'styled-components'

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
  height: 50%;
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
  height: 20%;
  font-size: 16px;
  padding: 4px;
  border: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 16px;
  }
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
        </MainContainerItems>
      </ContainerConnection>
    </MainContainerConnection>
  )
}

export default Connection