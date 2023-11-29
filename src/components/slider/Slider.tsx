
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
  border: 1px solid red;
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

/*import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.</Text>
                    <Name>@Ivan Ivanov</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};



    const StyledSlider = styled.div`
      max-width: 500px;
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
    const Pagination = styled.div`
      span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 30px;
        
        & + span{
          margin-left: 5px;
        }
        
        &.active{
          background-color: ${theme.colors.accent};
          width: 20px;
        }
    
      }
    `

 */