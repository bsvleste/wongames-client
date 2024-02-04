import Button from '../Button'
import { AddShoppingCart, FavoriteBorder, Favorite } from 'styled-icons/material-outlined'
import * as S from './styles'
import { ReactNode } from 'react'
import Ribbon, { RibbonColors, RibbonSize } from '../Ribbon'
export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  ribbon?: ReactNode
  ribbonSize?: RibbonSize
  ribbonColor?: RibbonColors
  onFav?: () => void
}
const GameCard = ({ title, developer, img, price, promotionalPrice, favorite = false, ribbon, ribbonSize = "small", ribbonColor = 'primary', onFav }: GameCardProps) => {

  return (
    <S.Wrapper>
      {
        !!ribbon && (<Ribbon color={ribbonColor} size={ribbonSize}>{ribbon}</Ribbon>)
      }
      <S.ImageBox>
        <picture>
          <img src={img} alt={title} />
        </picture>
      </S.ImageBox>
      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
          <S.FavButton role="button" onClick={onFav}>
            {favorite ? <Favorite aria-label="remove from wishlist" /> : <FavoriteBorder aria-label="Add to wish list" />}
          </S.FavButton>
          <S.BuyBox>
            {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
            <S.Price>{promotionalPrice || price}</S.Price>
            <Button icon={<AddShoppingCart />} size="small" />
          </S.BuyBox>
        </S.Info>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard