import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AboutMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92%;
  overflow: hidden;
`
const AboutMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 40%;
  height: 40%;
  border-bottom: 3px solid black;
  @media screen and (max-width: 720px) {
    width: 80%;
    height: 90%;
    border: none;
  } 
`
const AboutMessageTitleContainer = styled.div`
  display: flex;
  height: 50%;
  text-align: center;
  @media screen and (max-width: 720px) {
    border-bottom: 3px solid black;
  }
`
const AboutMessageTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: black;
  font-family: 'DM Sans';
  font-size: 42px;
`
const AboutMessageBodyContainer = styled.h2`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
  font-family: 'DM Sans';
`
const AboutMessage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const FontAwesomeIconContainer = styled(FontAwesomeIcon)`
  margin-right: 10px;
`



const About = () => {
  

  return (
    <AboutMainContainer>
      <AboutMessageContainer>
        <AboutMessageTitleContainer>
          <AboutMessageTitle>
            Ceci est un projet de fin d'année 3WA, le but est de :
          </AboutMessageTitle>
        </AboutMessageTitleContainer>
        <AboutMessageBodyContainer>
          <AboutMessage>
            <FontAwesomeIconContainer icon={faArrowRight}/>
            <div>Partager ses connaissances</div>
          </AboutMessage>
          <AboutMessage>
            <FontAwesomeIconContainer icon={faArrowRight}/>
            <div>Découvrir de nouvelles fonctionalités</div> 
          </AboutMessage>
        </AboutMessageBodyContainer>
      </AboutMessageContainer>
    </AboutMainContainer>
  )
}

export default About