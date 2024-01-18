import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'React Avançado',
  description: 'Boilerplate react avançado'
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
