import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>No Fate</SectionTitle>
            <StyledButton type={"submit"}>You fired</StyledButton>
        </StyledSlogan>
    );
};

 const StyledSlogan = styled.section`
     height: 50vh;
   background-color: #ffa6dc;
`