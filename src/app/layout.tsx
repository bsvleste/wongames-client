import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'

const poppins = Poppins({
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'

})
export const metadata: Metadata = {
  title: 'Won Games',
  description: 'Won games'
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
