import styled, { css } from "styled-components";
import media, { DefaultBreakpoints } from 'styled-media-query'
type breakPoint = keyof DefaultBreakpoints
export type MediaMatchProps = {
  lessThan?: breakPoint
  greaterThan?: breakPoint
}
const mediaMatchModifier = {
  lessThan: (size: breakPoint) => css`
    ${media.lessThan(size)`
      display: block
    `}
  `,
  greaterThan: (size: breakPoint) => css`
  ${media.greaterThan(size)`
      display: block
    `}
  `
}
export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
  
  ${!!lessThan && mediaMatchModifier.lessThan(lessThan)}
  ${!!greaterThan && mediaMatchModifier.greaterThan(greaterThan)}
  `}
  `
