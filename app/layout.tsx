import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://not-dreamstate.vercel.app'),
  title: 'Not Dreamstate',
  description: 'Welcome to our website',
  keywords: 'Technology, Our Services, Not Dreamstate',
  authors: [{ name: 'Not Dreamstate' }],
  openGraph: {
    title: 'Not Dreamstate',
    description: 'Welcome to our website',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        <div className="background-orbs" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}