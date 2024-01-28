import { ReactNode } from 'react'
import Button from '../Button'
import Ribbon, { RibbonColors, RibbonSize } from '../Ribbon'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: ReactNode
  ribbonSize?: RibbonSize
  ribbonColor?: RibbonColors
}
const Banner = ({ img, title, subtitle, buttonLabel, buttonLink, ribbon, ribbonSize = 'normal', ribbonColor = "primary" }: BannerProps) => (
  <S.Wrapper>
    {
      !!ribbon && (<Ribbon color={ribbonColor} size={ribbonSize}>{ribbon}</Ribbon>)
    }
    <S.Img src={img} role='img' aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as='a' href={buttonLink}>{buttonLabel}</Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner