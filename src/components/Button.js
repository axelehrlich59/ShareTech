import React from "react";
import styled, {css} from "styled-components";


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
        background: ${({IsHoverBackgroundWhite}) => IsHoverBackgroundWhite ? "white" : ""};
        color: ${({hoverColorText}) => hoverColorText};
        transition: 0.4s;
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
  IsHoverBackgroundWhite,
  hoverColorText,
  borderColor,
}) => {


  return (
    <ButtonStyle
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      isHoverActive={isHoverActive}
      IsHoverBackgroundWhite={IsHoverBackgroundWhite}
      hoverColorText={hoverColorText}
    >
      {text}
    </ButtonStyle>
  )
}

export default Button