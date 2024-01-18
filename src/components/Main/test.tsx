import { render, screen } from '@testing-library/react'
import Main from '.'
describe('<Main />', () => {
  it('should render the heading', () => {
    //renderiza o componente
    render(<Main />)
    //busca o elemento e verifica a existencia dele
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    //gerar snapshot
  })
  it('should render the colors correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
