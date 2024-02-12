import 'match-media-mock'

import GameCardSlider from '.'
import { renderWithTheme } from '@/utils/test/helper'
import items from './mock'

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })
})
