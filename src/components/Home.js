import React, {useState} from "react";
import styled from 'styled-components'
import PublishArticle from "./PublishArticle";
import AvatarImg from "../assets/img_avatar3.png"
import backgroundImg from "../assets/educational-bg.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faE, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";


const MainContainerArticlesPublished = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 2.5px solid black;
  overflow: auto;
  background: url(${backgroundImg});
`
const ContainerArticle = styled.div`
  display: flex;
  height: 650px;
  width: 1000px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  background-color: white;
  @media screen and (max-width: 720px) {
    width: 280px;
    justify-content: center;
  }
  @media (min-width: 720px) and (max-width: 1024px) {
    width: 500px;
  }
`
const ContainerPictureArticle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 650px;
  width: 200px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  @media screen and (max-width: 720px) {
    width: 280px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
  }
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
const ContainerTextArticle = styled.div`
  display: flex;
  height: 630px;
  width: 700px;
  padding: 10px;
  font-size: 18px;
  font-weight: lighter;
`
const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`
const ContainerCrud = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 80px;
  height: 70px;
  margin-top: 20px;
`
const ContainerIconTrash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
  :hover {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 10px, rgba(0, 0, 0, 0.13) 0px 2px 2px;
    transition: 0.6s;
  }
  cursor: pointer;
`
const ContainerIconEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
  :hover {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 10px, rgba(0, 0, 0, 0.13) 0px 2px 2px;
    transition: 0.6s;
  }
  cursor: pointer;
`
const IconTrash = styled(FontAwesomeIcon)`
  color: #F16C63;
`
const IconEdit = styled(FontAwesomeIcon)`
  color: #5c95ff;
`



const Home = () => {
   
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta augue id sem bibendum, eu tempus elit pharetra. Proin et lobortis leo, eu ornare velit. Vestibulum malesuada auctor varius. Morbi varius neque nulla, vitae euismod leo placerat in. Nam nec mi convallis, commodo est congue, dignissim urna. Donec tempus cursus est in elementum. Nulla aliquam efficitur est quis faucibus. Pellentesque rutrum quis arcu at tincidunt. Curabitur ut nisl dapibus, dignissim lorem a, sagittis ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ac  viverra enim, at accumsan elit. Ut vitae bibendum purus. Suspendisse in sapien luctus, lacinia magna eu, ornare leo.Donec eu auctor leo. Cras lobortis sapien et enim semper aliquet. Praesent sollicitudin quam id eros semper accumsan.  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean tellus ex, vehicula in tincidunt eu, pharetra in mauris. Proin erat metus, feugiat placerat sapien in, rutrum fringilla libero. Mauris elit dui, efficitur ac interdum quis, pretium sit amet risus. Quisque felis libero, blandit in consequat non, suscipit id ipsum.Nam nec imperdiet purus. Quisque pretium ex vel mattis vehicula. Maecenas vitae ullamcorper quam.Mauris iaculis libero vitae dui semper, id hendrerit ante sodales. Curabitur semper mi ipsum, id dignissim dolor scelerisque vel. Praesent cursus arcu eget ultrices congue. Quisque a maximus ex. Nam dignissim, quam at bibendum porttitor, tellus orci congue odio, quis tempor nulla elit tristique sem. Proin et neque ultricies, sollicitudin lectus sit amet, egestas ante. Integer in sodales metus. Vivamus mattis, sapien non pulvinar venenatis, nibh purus tristique est, vitae luctus ligula lorem sed nibh. Proin tincidunt, sapien in mattis gravida, arcu lectus iaculis tortor, at ultrices orci lectus vitae mauris. Ut et lobortis ligula, vel suscipit justo."

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
        <ContainerTextArticle>
          {loremIpsum}
        </ContainerTextArticle>
        <ContainerCrud>
          <ContainerIconTrash>
            <IconTrash icon={faTrash} />
          </ContainerIconTrash>
          <ContainerIconEdit>
            <IconEdit icon={faEdit} />
          </ContainerIconEdit>
        </ContainerCrud>
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