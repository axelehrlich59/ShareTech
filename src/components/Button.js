import React from "react";
import styled, {css} from "styled-components";


const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 40px;
  margin: 5px;
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
  border: solid 1.5px ${({borderColor}) => borderColor};
  border: ${({hideBorder}) => hideBorder ? "none" : "solid 1.5px white"};
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 150px;
    height: 50px;
    font-size: 22px;
  }
  transition: all ease 0.2s;
  box-shadow: ${({boxShadowIsActive}) => boxShadowIsActive ? `
    rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    :hover {
      transform: translateY(-5px);
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
  `
  : ""};
`

const Button = ({
  text,
  backgroundColor,
  textColor,
  isHoverActive,
  IsHoverBackgroundWhite,
  hoverColorText,
  borderColor,
  hideBorder,
  boxShadowIsActive,
}) => {


  return (
    <ButtonStyle
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      isHoverActive={isHoverActive}
      IsHoverBackgroundWhite={IsHoverBackgroundWhite}
      hoverColorText={hoverColorText}
      hideBorder={hideBorder}
      boxShadowIsActive={boxShadowIsActive}
    >
      {text}
    </ButtonStyle>
  )
}

export default Button