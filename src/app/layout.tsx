'use client'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Conditions_header from '@/components/Layout/Conditions_header'
import Footer from '@/components/Layout/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import { usePathname } from 'next/navigation'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  const conditionRoutes = [
    '/tr-tr/mobil_gizlilik_sozlesmesi',
    '/tr-tr/mobil_mesafeli_satis_sozlesmesi',
  ]

  const isConditionPage = conditionRoutes.includes(pathname)

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={font.className}>
        <Aoscompo>
          {isConditionPage ? <Conditions_header /> : <Header />}
          {children}
          {isConditionPage ? <></> : <Footer />}
        </Aoscompo>
        <ScrollToTop />
      </body>
    </html>
  )
}
