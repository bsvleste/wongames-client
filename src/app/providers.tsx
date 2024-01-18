'use client'
import GlobalStyles from '@/styles/global'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
