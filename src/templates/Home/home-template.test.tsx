import { renderWithTheme } from '../../utils/test/helper'
import { HomeTemplate } from './home-template'
import { screen } from '@testing-library/react'
describe('< HomeTemplate /> ', () => {
  it('should render a menu and footer', () => {
    renderWithTheme(<HomeTemplate />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /most popular/i }))
      .toHaveStyle({
        color: "#030517"
      })
  })
})