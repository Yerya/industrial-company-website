import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"]
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  title: 'SOD EAST TRADE HOUSE | Инженеринг и промышленные решения',
  description: 'Комплексные инженерные решения для промышленных предприятий. Монтаж, пусконаладка, ремонт оборудования. Поставка для пищевой, энергетической, горнодобывающей и металлургической промышленности.',
  keywords: ['инженеринг', 'монтаж оборудования', 'сварочные работы', 'пищевая промышленность', 'энергетика', 'Узбекистан', 'Ташкент'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
