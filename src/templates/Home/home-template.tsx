'use client'
import { BannerProps } from "@/components/Banner"
import BannerSlider from "@/components/BannerSlider";
import { Container } from "@/components/Container";
import Footer from "@/components/Footer";
import { GameCardProps } from "@/components/GameCard";
import GameCardSlider from "@/components/GameCardSlider";
import Heading from "@/components/Heading";
import Highlight, { HighlightProps } from "@/components/Highlight";
import Menu from "@/components/Menu";
import * as S from './home-template.styles'
export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}
export function HomeTemplate({
  banners,
  newGames,
  mostPopularGames,
  mostPopularHighlight,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) {

  return (
    <section>
      <Container>
        <Menu userName="Bruno" />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary">News</Heading>
          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor="secondary">Most Popular</Heading>
          <Highlight  {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} color="white" />
        </S.SectionMostPopular>
      </Container>

      <S.SectionUpcoming>
        <Container>
          <Heading lineLeft lineColor="secondary">Upcoming</Heading>
          <GameCardSlider items={upcommingGames} color="white" />
          <Highlight  {...upcommingHighligth} />
          <GameCardSlider items={upcommingMoreGames} color="white" />
        </Container>
      </S.SectionUpcoming>

      <Container>
        <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary">Free Games</Heading>
          <Highlight  {...freeHighligth} />
          <GameCardSlider items={freeGames} color="white" />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  )
}