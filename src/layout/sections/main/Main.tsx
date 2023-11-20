import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/avatar.jpg';
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi there</span>
                    <Name>Mironov Nik</Name>
                    <MainTitle>Front-end developer</MainTitle>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  height: 100vh;
  background-color: #77fff0;
`
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const MainTitle = styled.h1`

`

const Name = styled.h2`

`