import React from "react";
import styled from 'styled-components'

const PublicationArticleTextArea = styled.textarea`
  border: 2px solid black;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: light;
  font-family: 'DM Sans';
  padding: 5px;
  @media screen and (max-width: 720px) {
    width: 250px;
    height: 450px;
  }
  @media (min-width: 720px) and (max-width: 1024px) {
    width: 500px;
    height: 500px;
  }
`



const TextArea = ({
  placeholder,
  rows,
  cols,
}) => {
  

  return (
    <PublicationArticleTextArea 
      placeholder={placeholder}
      rows={rows}
      cols={cols}
    />
  )
}

export default TextArea