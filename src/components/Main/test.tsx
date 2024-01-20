import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import Main from '.'
describe('<Main />', () => {
  it('should render the heading', () => {
    //renderiza o componente
    render(<ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>)
    //busca o elemento e verifica a existencia dele
    expect(
      screen.getByRole('heading', { name: /React avançado/i })
    ).toBeInTheDocument()
    //gerar snapshot
  })
  it('should render the colors correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    )
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
