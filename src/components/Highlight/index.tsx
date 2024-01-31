import Button from '../Button'
import * as S from './styles'
export type HighlightProps = {
  title: string,
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  aligment?: 'left' | 'right'

}
const Highlight = ({ title, subtitle, buttonLabel, buttonLink, backgroundImage, floatImage, aligment = 'right' }: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage} aligment={aligment}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <Button as="a" href={buttonLink}>{buttonLabel}</Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight