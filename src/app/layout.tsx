'use client'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
import { usePathname } from 'next/navigation'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  console.log(pathname)
  const hideLayoutRoutes = ['/tr-tr/mobil_gizlilik_sozlesmesi']
  const shouldHideLayout = hideLayoutRoutes.includes(pathname)
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <Aoscompo>
          {!shouldHideLayout && <Header />}
          {children}
          {!shouldHideLayout && <Footer />}
        </Aoscompo>
        <ScrollToTop />
      </body>
    </html>
  )
}
