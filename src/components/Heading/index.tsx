import { ReactNode } from 'react'
import * as S from './styles'
export type LineColors = 'primary' | 'secondary'
export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'medium'
  lineColor?: LineColors
}
const Heading = ({
  children,
  color = "white",
  lineLeft = false,
  lineBottom = false,
  lineColor = "primary",
  size = "medium"
}: HeadingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom} lineColor={lineColor} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading