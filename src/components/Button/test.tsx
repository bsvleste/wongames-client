import { screen } from '@testing-library/react'
import Button from '.'
import { renderWithTheme } from '@/utils/test/helper'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
describe('<Button />', () => {
  it('should render the small size when passed size small', () => {
    const { container } = renderWithTheme(<Button size='small'>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the medium size by defaault', () => {
    renderWithTheme(<Button>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

  })
  it('should render the large size when passed large size', () => {
    renderWithTheme(<Button size='large'>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem',
    })
  })
  it('should render the fullwidth button when passed fullwidth props', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })
  it('should render a icon version', () => {
    renderWithTheme(<Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>)
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })
  it.skip('should render a minimal version', () => {
    renderWithTheme(<Button icon={<AddShoppingCart data-testid="icon" />} minimal={true}>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })
  })
  it('should render button as link version', () => {
    renderWithTheme(<Button as='a' href="/link">Buy now</Button>)
    expect(screen.getByRole('link', { name: /Buy now/i })).toHaveAttribute('href', '/link')
  })
})