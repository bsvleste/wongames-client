'use client'
import { Container } from "@/components/Container";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Menu from "@/components/Menu";
type HomeTemplateProps = {
  headings: string
}
export function HomeTemplate({ headings }: HomeTemplateProps) {
  return (
    <section>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Heading lineLeft lineColor="secondary">{headings}</Heading>
      </Container>
      <Container>
        <Heading lineLeft lineColor="secondary">Most Popular</Heading>
      </Container>
      <Container>
        <Heading lineLeft lineColor="secondary">Upcoming</Heading>
      </Container>
      <Container>
        <Heading lineLeft lineColor="secondary">Free Games</Heading>
      </Container>
      <Container>
        <Footer />
      </Container>
    </section>
  )
}