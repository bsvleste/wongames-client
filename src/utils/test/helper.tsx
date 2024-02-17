import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { RenderResult, render } from '@testing-library/react'
import { ReactNode } from 'react'
import theme from '@/styles/theme'

export function renderWithTheme(children: ReactNode): RenderResult {
  return render(
    <ThemeProvider theme={theme}>
      <StyleSheetManager
        shouldForwardProp={(prop) =>
          !['slideCount', 'currentSlide'].includes(prop)
        }
      >
        {children}
      </StyleSheetManager>
    </ThemeProvider>
  )
}