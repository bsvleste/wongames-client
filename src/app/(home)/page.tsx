import { HomeTemplate } from '@/templates/Home/home-template'
import { Metadata } from 'next'
import bannerSlideMock from '@/components/BannerSlider/mock'
import gameCardSlideMock from '@/components/GameCardSlider/mock'
import highligthMock from '@/components/Highlight/mock'
export const metadata: Metadata = {
  title: 'Won Game',
}
async function getHeadings() {
  return {
    banners: bannerSlideMock,
    newGames: gameCardSlideMock,
    mostPopularHighlight: highligthMock,
    mostPopularGames: gameCardSlideMock,
    upcommingGames: gameCardSlideMock,
    upcommingMoreGames: gameCardSlideMock,
    upcommingHighligth: highligthMock,
    freeGames: gameCardSlideMock,
    freeHighligth: highligthMock
  }
}

export default async function Home() {
  const { banners,
    newGames,
    mostPopularHighlight,
    mostPopularGames,
    upcommingGames,
    upcommingHighligth,
    upcommingMoreGames,
    freeGames,
    freeHighligth
  } = await getHeadings();
  return <HomeTemplate
    banners={banners}
    newGames={newGames}
    mostPopularGames={mostPopularGames}
    mostPopularHighlight={mostPopularHighlight}
    upcommingGames={upcommingGames}
    upcommingHighligth={upcommingHighligth}
    upcommingMoreGames={upcommingMoreGames}
    freeGames={freeGames}
    freeHighligth={freeHighligth}
  />
}
