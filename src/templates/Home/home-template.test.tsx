import 'match-media-mock'
import { renderWithTheme } from '../../utils/test/helper'
import { HomeTemplate } from './home-template'
import { screen } from '@testing-library/react'
import bannerMock from '@/components/BannerSlider/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighligth: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighligth: highlightMock
}
describe('< HomeTemplate /> ', () => {
  it('should render a menu and footer', () => {
    renderWithTheme(<HomeTemplate {...props} />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
  })
  it('should render sections', () => {
    renderWithTheme(<HomeTemplate {...props} />)
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
  })
  it('should render section elements', () => {
    renderWithTheme(<HomeTemplate {...props} />)
    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // card game ( 5 sections com 4 cards cada = 5x1= 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    // highlight
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3)
  })
})