import { NextResponse } from 'next/server'

import { headerItem } from '@/app/types/menu'
import { featureData } from '@/app/types/featuredata'
import { socialLinksData } from '@/app/types/sociallinks'
import { plansData } from '@/app/types/plans'
import { footerlLinksData } from '@/app/types/footerlinks'

const HeaderData: headerItem[] = [
  { label: 'Uygulama', href: '/#product' },
  { label: 'Fiyat', href: '/#pricing' },
  { label: 'Özellikler', href: '/#features ' },
  { label: 'İletişim', href: '/#contact ' },
  { label: 'Dokumentasyon', href: '/documentation' },
]

const FeatureData: featureData[] = [
  {
    imgSrc: '/images/features/time.svg',
    heading: 'Kamerayla hızlı tarama',
    link: '/quick_Scan',
    paragraph:
      'Makine öğrenimi aracılığı ile misafirlerin kimlik bilgilerini saniyeler içinde okuyup uygulamaya aktaran bir sistem kullanın.',
  },
  {
    imgSrc: '/images/features/signal.svg',
    heading: 'Misafir kendi tarasın',
    link: '/self_scan',
    paragraph:
      'Bir link oluşturup misafirlerinizin kendi cep telefonu kamerası aracılığı ile kimlik bilgilerini taramasını sağlayın. ',
  },
  {
    imgSrc: '/images/features/dollar.svg',
    heading: 'Manuel giriş',
    link: '/manual_entry',
    paragraph:
      'Kimlik bilgilerini, olası olumsuz durumlarda elle girin',
  },
]

const PlansData: plansData[] = [
  {
    heading: 'Free',
    price: {
      monthly: 0,
      yearly: 0,
    },
    subscriber: 0,
    button: 'Ücretsiz Abone Ol',
    option: [
      'Oda oluşturma',
      'T.C. Kimiik Tarama',
      'Pasaport Tarama',
      '1 Yıl Şifrelenmiş Saklama',
      'Sınırsız tarama',
      '10 gün ücretsiz pro'
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starone.svg',
  },
  {
    heading: 'Pro',
    price: {
      monthly: 400,
      yearly: 4000,
    },
    subscriber: 0,
    button: 'Satın Al',
    option: [
      'Tüm Free Özellikler',
      'Otomatik KBS Kimlik Bildirimi',
      'İstatistik Analizi',
      'Öncelikli Müşteri Hizmetleri',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starthree.svg',
  },
]

const FooterLinks: footerlLinksData[] = [
  { label: 'Uygulama', href: '/#product' },
  { label: 'Fiyat', href: '/#pricing' },
  { label: 'Özellikler', href: '/#features ' },
  { label: 'İletişim', href: '/#contact ' },
]

const SocialLinks: socialLinksData[] = [
  {
    imgSrc: 'fa-brands:facebook-f',
    link: 'www.facebook.com',
    width: 10,
  },
  {
    imgSrc: 'fa6-brands:instagram',
    link: 'www.instagram.com',
    width: 14,
  },
  {
    imgSrc: 'fa6-brands:twitter',
    link: 'www.twitter.com',
    width: 14,
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeatureData,
    PlansData,
    FooterLinks,
    SocialLinks,
  })
}
