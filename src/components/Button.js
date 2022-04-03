import React from "react";
import {styled} from "styled-components";

const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 40px;
  background-color: ${({backgroundColor}) => backgroundColor};
  color: ${({textColor}) => textColor};
  ${({isHoverActive}) => isHoverActive && css`
      &:hover {
        background: 'red';
      }
   `}
  border-radius: 5px;
  border: solid 1px ${({borderColor}) => borderColor};
  cursor: pointer;
`

const Button = ({
  text,
  backgroundColor,
  textColor,
  isHoverActive,
  borderColor,
}) => {


  return (
    <ButtonStyle
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
    >
      {text}
    </ButtonStyle>
  )
}

export default Button