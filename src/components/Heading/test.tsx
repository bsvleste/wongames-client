import { screen } from '@testing-library/react'

import Heading from '.'
import { renderWithTheme } from '@/utils/test/helper'

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>Most Popular</Heading>)
    expect(screen.getByRole('heading', { name: /most popular/i }))
      .toHaveStyle({
        color: "#030517"
      })
  })
  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Heading color="white">Most Popular</Heading>)
    expect(screen.getByRole('heading', { name: /most popular/i }))
      .toHaveStyle({
        color: "#FAFAFA"
      })
  })
  it('should render a lineLeft heading when lineleft is passed', () => {
    renderWithTheme(<Heading lineLeft={true}>Most Popular</Heading>)
    expect(screen.getByRole('heading', { name: /most popular/i }))
      .toHaveStyle({
        'border-left': '0.7rem solid #F231A5'
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
  it('should render a heading whit a small size', () => {
    renderWithTheme(<Heading size='small'>Most Popular</Heading>)
    expect(screen.getByRole('heading', { name: /most popular/i }))
      .toHaveStyle({
        'font-size': '1.6rem'
      })
    expect(screen.getByRole('heading', { name: /most popular/i }))
      .toHaveStyleRule(
        'width', "3rem",
        {
          modifier: "::after"
        }
      )
    expect(screen.getByRole('heading', { name: /most popular/i }))
      .toHaveStyleRule(
        "border-bottom", "0.3rem solid #F231A5",
        {
          modifier: "::after"
        }
      )
  })
  it('should render a heading whit a normal size', () => {
    renderWithTheme(<Heading >Most Popular</Heading>)
    expect(screen.getByRole('heading', { name: /most popular/i }))
      .toHaveStyle({
        'font-size': '4.8rem'
      })

  })
  it('should render a Heading with a primary line color', () => {
    renderWithTheme(<Heading lineLeft={true} lineBottom={true} lineColor="primary">Most Popular</Heading>)
    const heading = screen.getByRole('heading', { name: /most popular/i })
    expect(heading).toHaveStyle({ 'border-left': "0.7rem solid #F231A5" })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: "::after"
    })
  })
  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(<Heading lineLeft={true} lineBottom={true} lineColor="secondary">Most Popular</Heading>)
    const heading = screen.getByRole('heading', { name: /most popular/i })
    expect(heading).toHaveStyle({ 'border-left': "0.7rem solid #3CD3C1" })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: "::after"
    })
  })
})