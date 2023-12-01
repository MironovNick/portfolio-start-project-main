import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  align-items: center;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;
  
  &:hover{
    &::before{
      height: 10px;
    }
  }
  
  &::before{
    content: "";
    display: inline-block;
    height: 0;
    position: absolute;
    bottom: 3px;
    left: 0;
    right: 0;
    background-color: ${theme.colors.accent};
    z-index: -1;
    transition: .2s ease-in-out;
  }
`