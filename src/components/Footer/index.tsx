import Logo from '../Logo'
import Heading from '../Heading'
import * as S from './styles'
import Link from 'next/link'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading lineBottom size='small' lineColor='secondary' color='black' >
          contact us
        </Heading>
      </S.Column>
      <S.Column>
        <Heading lineBottom size='small' lineColor='secondary' color='black'>
          Follow us
        </Heading>
        <nav aria-labelledby='social media'>
          <a href="#" >Instagram</a>
          <a href="#" rel="noopenner, noreferrer" target='_blank'>Twitter</a>
          <a href="#" rel="noopenner, noreferrer" target='_blank'>Youtube</a>
          <a href="#" rel="noopenner, noreferrer" target='_blank'>facebook</a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading lineBottom size='small' lineColor='secondary' color='black'>
          Links
        </Heading>
        <nav aria-labelledby='footer resources'>
          <Link href="#">Home</Link>
          <Link href="#">Store</Link>
          <Link href="#">Buscar</Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby='footer-contact'>
        <Heading lineBottom size='small' lineColor='secondary' color='black'>
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
      </S.Column>
    </S.Content>
    <S.CopyRight>WonGames 2020@ all rigths reserved</S.CopyRight>
  </S.Wrapper >
)

export default Footer