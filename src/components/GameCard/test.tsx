import { fireEvent, screen } from '@testing-library/react'
import theme from '../../styles/theme'
import GameCard from '.'
import { renderWithTheme } from '@/utils/test/helper'
const props = {
  title: 'Read dead',
  developer: 'rockstar game',
  img: '/img/red-dead-img.jpg',
  price: 'R$ 235,00'
}
describe('<GameCard />', () => {
  it('should render the correctly', () => {
    renderWithTheme(<GameCard {...props} />)
    //verifica se o title esta sendo renderizado   
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument()
    //verifica se o developer eta sendo renderizado
    expect(screen.getByRole('heading', { name: props.developer })).toBeInTheDocument()
    //verifaca o botao de add lista de desejo
    expect(screen.getByLabelText(/Add to wish list/i)).toBeInTheDocument()
    //verifica se a image esta sendo renderizada
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
  })
  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)
    const price = screen.getByText('R$ 235,00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)
    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
  it('should render a filled Favorite icon wne favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite={true} />)
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })
  it('should call onFav method when is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite={true} onFav={onFav} />)
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toHaveBeenCalled()
  })
  it('should render a Ribbon', () => {
    renderWithTheme(<GameCard {...props} ribbon="My Ribbon" ribbonSize="small" ribbonColor="secondary" />)
    const ribbon = screen.getByText(/My ribbon/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ background: "#3CD3C1" });
    expect(ribbon).toHaveStyle({ height: "2.6rem", fontSize: "1.2rem" });;
  })
})