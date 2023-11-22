import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/avatar.jpg';
import { Container } from '../../../components/Container';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <div>
                        <SmallText>Hi there!</SmallText>
                        <Name><span>Mironov Nik</span></Name>
                        <MainTitle>Front-end developer</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  height: 100vh;
  background-color: #77fff0;
  display: flex;
`
const Photo = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  /*border-radius: 300px;*/
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  
  &::before{
    content: "";
    width: 295px;
    height: 340px;
    border: 8px solid ${theme.colors.accent};
    position: absolute;
    
    z-index: -1;
    top: -19px;
    left: 24px;
  }
`

const MainTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  margin-left: 2px;
  color: ${theme.colors.accent};
`

const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 55px;
  letter-spacing: 0.05em;
  text-align: left;

;

  span {
    
    position: relative;
    z-index: 0;
    
    &::before{
      content: "";
      display: inline-block;
      width: 100%;
      height: 8px;
      background-color: ${theme.colors.accent};
      position: absolute;
      top: 25px;
      z-index: -1;
    }
  }

`
const SmallText = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-left: 2px;
`