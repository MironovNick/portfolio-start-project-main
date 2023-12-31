import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"subject"}/>
                    <Field placeholder={"message"} as={"textarea"}/>
                    <StyledButton type={"submit"}>Send Message</StyledButton>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

`

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  
  textarea{
    resize: none;
    height: 155px;
  }
`

const Field = styled.input`
  width: 100%;
  background-color: #252527;
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  text-transform: capitalize;
  color: ${theme.colors.font};
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.0375rem;
  
  &::placeholder{
    color: ${theme.colors.placeholderColor};
  }
  
  &:focus-visible{
    outline: 1px solid ${theme.colors.borderColor};
  }
`
