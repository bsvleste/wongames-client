import { Meta, StoryObj } from '@storybook/react'
import Slider from '.'
import { Settings } from 'react-slick';
import styled from 'styled-components';
const meta: Meta<typeof Slider> = {
  component: Slider
}
export default meta;
type Story = StoryObj<typeof Slider>
const horizonytalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: Story = {
  render: () => <Slider settings={horizonytalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
  </Slider>
}
export const Vertical: Story = {
  render: () => <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
  </Slider>
}

