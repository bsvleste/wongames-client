import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearcrhIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import * as S from './styles'
import Logo from '../Logo'
import { useState } from 'react'
import Button from '../Button'
import MediaMatch from '../MediaMatch'

export type MenuProps = {
  userName?: string
}
const Menu = ({ userName }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  function handleSetIsOpen() {
    setIsOpen(!isOpen)
  }
  return (
    <S.Wrapper>

      <MediaMatch lessThan='medium'>
        <S.IconWrapper onClick={handleSetIsOpen} >
          <MenuIcon aria-label='open menu' />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan='medium'>
        <S.MenuNav>
          <S.MenuLink href='#'>Home</S.MenuLink>
          <S.MenuLink href='#'>Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearcrhIcon aria-label='search' />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCart aria-label='open shopping cart' />
        </S.IconWrapper>
        {!userName &&
          <>
            <MediaMatch greaterThan='medium'>
              <Button>Sign In</Button>
            </MediaMatch>
          </>
        }
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label='close menu' onClick={handleSetIsOpen} />
        <S.MenuNav>
          <S.MenuLink href='#'>Home</S.MenuLink>
          <S.MenuLink href='#'>Explore</S.MenuLink>
          {
            !!userName &&
            <>
              <S.MenuLink href='#'>My Account</S.MenuLink>
              <S.MenuLink href='#'>WishList</S.MenuLink>
            </>
          }
        </S.MenuNav>
        {
          !userName &&
          <>
            <S.RegisterBox>
              <Button fullWidth size='large'>Sign In</Button>
              <span>or</span>
              <S.CreateAccount href='#'>Sign Up</S.CreateAccount>
            </S.RegisterBox>
          </>
        }
      </S.MenuFull>
    </S.Wrapper>
  )
}
export default Menu