import React, {useState} from "react";
import styled from 'styled-components'
import PublishArticle from "./PublishArticle";
import AvatarImg from "../assets/img_avatar3.png"


const MainContainerArticlesPublished = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 2.5px solid black;
  overflow: auto;
`

const ContainerArticle = styled.div`
  display: flex;
  height: 650px;
  width: 1000px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
`
const ContainerPictureArticle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 650px;
  width: 200px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`
const ContainerProfilElements = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const ContainerUserName = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
`

const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`



const Home = () => {
   

  return (
    <>
    <MainContainerArticlesPublished>
      <ContainerArticle>
        <ContainerPictureArticle>
          <ContainerProfilElements>
            <Img src={AvatarImg}/>
            <ContainerUserName>Axel</ContainerUserName>
          </ContainerProfilElements>
        </ContainerPictureArticle>
      </ContainerArticle>
    </MainContainerArticlesPublished>
    <MainContainerArticlesPublished>
      <ContainerArticle>
      <ContainerPictureArticle>
        <ContainerProfilElements>
          <Img src={AvatarImg}/>
          <ContainerUserName>Jean</ContainerUserName>
        </ContainerProfilElements>
      </ContainerPictureArticle>
      </ContainerArticle>
    </MainContainerArticlesPublished>
    </>
  )
}

export default Home