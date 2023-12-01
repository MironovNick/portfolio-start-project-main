import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/avatar.jpg';
import {Container} from '../../../components/Container';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <SmallText>Hi there!</SmallText>
                        <Name><span>Mironov Nik</span></Name>
                        <MainTitle>
                            <p>Front-end developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Front-end developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 20,
                                }}
                            />
                        </MainTitle>
                    </div>
                    <Tilt>
                        <PhotoWrapper>
                            <Photo src={photo} alt=""/>
                        </PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #77fff0;
  display: flex;
`
const Photo = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  /*border-radius: 300px;*/

  @media ${theme.media.tablet} {
    width: 250px;
    height: 250px;;
  }

  @media ${theme.media.mobile} {
    width: 250px;
    height: 250px;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;


  &::before {
    content: "";
    width: 295px;
    height: 340px;
    border: 8px solid ${theme.colors.accent};
    position: absolute;

    z-index: -1;
    top: -19px;
    left: 24px;

    @media ${theme.media.tablet} {
      width: 245px;
      height: 290px;
    }

    @media ${theme.media.mobile} {
      width: 245px;
      height: 290px;
    }
  }

  @media ${theme.media.tablet} {
    margin: 65px 0 20px 0;
  }
`

const MainTitle = styled.h1`
  /* font-size: 20px;
   font-weight: 400;
   line-height: 20px;*/
  margin-left: 2px;
  color: ${theme.colors.accent};

  ${font({color: '#FF5D3C', weight: 400, Fmax: 22, Fmin: 16})}
  p {
    display: none;
  }
`

const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 40, Fmin: 26})} /*font-family: 'Josefin Sans', sans-serif;
  font-size: 40px;
  font-weight: 700;*/ line-height: 55px;
  letter-spacing: 0.05em;
  text-align: left;
  margin: 10px 0;;

  span {

    position: relative;
    z-index: 0;

    &::before {
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

    /*@media ${theme.media.mobile} {
    margin: 0 0 20px 0;
  }*/

`
const SmallText = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-left: 2px;
  @media ${theme.media.mobile} {
    margin: 50px 0 0 0;
  }
`