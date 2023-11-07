import type { Metadata } from 'next'
import { Inter, Onest } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const onest = Onest({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap', // to fix issue https://github.com/vercel/next.js/issues/47115
})

export const metadata: Metadata = {
  title: 'Replica | Landing Page',
  description: 'Replica Landing Page Demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={cn(inter.className, onest.variable)}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
