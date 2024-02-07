import theme from '../../styles/theme'
import { renderWithTheme } from '@/utils/test/helper'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the Container', () => {
    const { container } = renderWithTheme(<Container><span>Won Games</span></Container>)
    expect(container.firstChild).toHaveStyleRule(
      "max-width",
      theme.grid.container
    )
  })
})