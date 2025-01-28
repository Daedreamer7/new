import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'concepts on concepts',
  description: 'widget show-case',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
