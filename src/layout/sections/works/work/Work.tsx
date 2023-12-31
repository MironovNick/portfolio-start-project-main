import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {StyledButton} from "../../../../components/Button";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src}/>
                <StyledButton>view project</StyledButton>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1;

  ${Link} {
    padding: 10px 0;
    
    & + ${Link}{
      margin-left: 20px;
    }
  }
  
  @media ${theme.media.desctop} {
    max-width: 540px;
  }
`
const ImageWrapper = styled.div`
    position: relative;

  ${StyledButton}{
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 10%);
    transition: .4s ease-in-out;

    &::before{
      width: 100%;
      height: 100%;
    }
  }

  &::before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: .4s ease-in-out;
  }
  
    &:hover{
      &::before{
        opacity: 1;
      }
      
      ${StyledButton}{
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }
  
    @media ${theme.media.tablet} {
      &::before{
        opacity: 1;
      }

      ${StyledButton}{
        opacity: 1;
      }
    }

`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Description = styled.div`
    padding: 25px 20px;
`

const Title = styled.h3`
`

const Text = styled.p`
    margin: 14px 0 10px;
`

