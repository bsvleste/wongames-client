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
/* 
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Highlight, { HighlightProps } from "@/components/Highlight";
import { GameCardProps } from "@/components/GameCard";
import { BannerProps } from "@/components/Banner";
import GameCardSlider from "@/components/GameCardSlider";
type HomeTemplateProps = {
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
        <Menu />
        <BannerSlider items={banners} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">News</Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">Most Popular</Heading>
        <Highlight  {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} color="white" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">Upcoming</Heading>
        <GameCardSlider items={upcommingGames} color="white" />
        <Highlight  {...upcommingHighligth} />
        <GameCardSlider items={upcommingMoreGames} color="white" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">Free Games</Heading>
        <Highlight  {...freeHighligth} />
        <GameCardSlider items={freeGames} color="white" />
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  )
} */
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
        <BannerSlider items={banners} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">News</Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">Most Popular</Heading>
        <Highlight  {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} color="white" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">Upcoming</Heading>
        <GameCardSlider items={upcommingGames} color="white" />
        <Highlight  {...upcommingHighligth} />
        <GameCardSlider items={upcommingMoreGames} color="white" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">Free Games</Heading>
        <Highlight  {...freeHighligth} />
        <GameCardSlider items={freeGames} color="white" />
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  )
}