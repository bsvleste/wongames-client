import { fireEvent, screen } from '@testing-library/react'

import Menu from '.'
import { renderWithTheme } from '@/utils/test/helper'

describe('<Menu />', () => {
  it('should render the Menu', () => {
    const { container } = renderWithTheme(<Menu />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won game/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('it should handle open and close mobile menu ', () => {
    renderWithTheme(<Menu />)
    //selecionar o menu
    const fullMenuElement = screen.getByRole("navigation", { hidden: true })
    //verificar se o menu esta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    //clicar no botao de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })
    //clicar no botao de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
  it('should show register box when logeed out', () => {
    renderWithTheme(<Menu />)
    //expect(screen.getByText(/sign In/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
  })
  it('should show whiliest and account  when logged', () => {
    renderWithTheme(<Menu userName='Bruno' />)
    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })
})