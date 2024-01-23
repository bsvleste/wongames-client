import { screen } from '@testing-library/react'

import Heading from '.'
import { renderWithTheme } from '@/utils/test/helper'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Most Popular</Heading>)
    expect(screen.getByRole('heading', { name: /most popular/i }))
      .toHaveStyle({
        color: "#FAFAFA"
      })
  })
  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Most Popular</Heading>)
    expect(screen.getByRole('heading', { name: /most popular/i }))
      .toHaveStyle({
        color: "#030517"
      })
  })
  it('should render a lineLeft heading when lineleft is passed', () => {
    renderWithTheme(<Heading lineLeft={true}>Most Popular</Heading>)
    expect(screen.getByRole('heading', { name: /most popular/i }))
      .toHaveStyle({
        'border-left': '0.7rem solid #3CD3C1'
      })
  })
  it('should render a lineBottom heading when lineBottom is passed', () => {
    renderWithTheme(<Heading lineBottom={true}>Most Popular</Heading>)
    expect(screen.getByRole('heading', { name: /most popular/i }))
      .toHaveStyleRule(
        "border-bottom", "0.5rem solid #F231A5",
        {
          modifier: "::after"
        }
      )
  })
})