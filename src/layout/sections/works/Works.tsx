import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialnetwork from "./../../../assets/images/socialnetwork.webp";
import timer from "./../../../assets/images/timer.webp";
import {Container} from "../../../components/Container";
import {Fade} from "react-awesome-reveal";

const worksItems = ["all", "landing page", "react", "spa"];

export const Works = () => {
    return (
        <StyledWorks>
            <Fade>
                <Container>
                    <SectionTitle>My Works</SectionTitle>
                    <TabMenu menuItems={worksItems}/>
                    <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                        <Work src={socialnetwork} title={"Social Network"}
                              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}></Work>
                        <Work src={timer} title={"Timer"}
                              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}></Work>
                    </FlexWrapper>
                </Container>
            </Fade>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`