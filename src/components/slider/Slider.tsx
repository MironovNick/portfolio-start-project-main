
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import '../../styles/Slider.css';

type SlidePropsType = {
    text: string
    userName: string
}

const SlideItem = (props: SlidePropsType) => {

    return (
        <Slide>
            <Text>{props.text}</Text>
            <Name>@{props.userName}</Name>
        </Slide>
    )
}

const items = [
    <SlideItem userName={"Ivan Ivanov"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
    <SlideItem userName={"Petr Petrov"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
    <SlideItem userName={"Igor Igorev"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
];

export const Slider = () => (
    <StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </StyledSlider>
);

const StyledSlider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
      text-align: center;
    `
const Text = styled.p`
    `
const Name = styled.span`
      font-family: 'Josefin Sans', sans-serif;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin: 22px 0 42px;
      display: inline-block;

    `
