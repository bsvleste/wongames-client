import styled, { DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps, LineColors } from '.'

const wrapperModifiers ={
  small:(theme:DefaultTheme,lineColor:LineColors)=>css`
    font-size: ${theme.spacings.xsmall};
    &::after{
      width: 3rem;
      border-bottom: 0.3rem solid ${theme.colors[lineColor]};
    }
    `,
    medium:(theme:DefaultTheme)=>css`
    font-size: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}
  `,
  lineBottom:(theme:DefaultTheme,lineColor:LineColors)=>css`
    position:relative;
    margin-bottom: ${theme.spacings.medium};

    &::after{
      position: absolute;
      left: 0;
      bottom: -1rem;
      content:'';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,
  lineLeft:(theme:DefaultTheme,lineColor:LineColors)=>css`
    padding-left: ${theme.spacings.xxsmall };
    border-left: 0.7rem solid  ${theme.colors[lineColor]} ; 
  `,  
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({theme,color,lineLeft,lineBottom,lineColor,size})=>css`
  color: ${theme.colors[color!]};
  ${lineLeft && wrapperModifiers.lineLeft(theme,lineColor!)}
  ${lineBottom && wrapperModifiers.lineBottom(theme,lineColor!)}
  ${!!size && wrapperModifiers[size](theme,lineColor!)}
  `}
`