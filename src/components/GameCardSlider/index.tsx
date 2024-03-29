import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import GameCard, { GameCardProps } from '../GameCard'
import * as S from './styles'
import Slider, { SliderSettings } from '../Slider'
import { Suspense } from 'react'
export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}
const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />
}
const GameCardSlider = ({ items, color = "black" }: GameCardSliderProps) => (
  <Suspense>
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map(item => (
          <GameCard
            key={item.title}
            {...item}
          />
        ))}
      </Slider>
    </S.Wrapper>
  </Suspense>
)

export default GameCardSlider
