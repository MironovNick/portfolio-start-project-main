import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper} from "../skills/skill/Skill";
import {Container} from "../../../components/Container";
import { Fade } from "react-awesome-reveal";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Fade>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <IconWrapper>
                        <Icon iconId={"quote"}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
            </Fade>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  min-height: 80vh;
  background-color: #ffa6dc;

  ${IconWrapper} {
    margin: 35px 0 70px;
  }
`