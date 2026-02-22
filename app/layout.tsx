import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Francheska Olympia',
  description: 'Student portfolio showcasing projects and research',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/self3.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/self3.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/self3.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/images/self3.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
