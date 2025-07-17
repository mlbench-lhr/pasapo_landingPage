'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import SignUp from '@/components/Auth/SignUp'
const Banner = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const signUpRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSignUpOpen])
  return (
    <section className='bg-header pt-28 lg:pb-14 overflow-hidden'>
      <div className='container'>
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-12 content-center'>
          <div className='lg:col-span-7 flex flex-col justify-center relative'>
            <Image
              src='/images/hero/star.svg'
              alt='star-image'
              width={95}
              height={97}
              className='absolute top-[-74px] right-[51px] opacity-10'
            />
            <Image
              src='/images/hero/lineone.svg'
              alt='line-image'
              width={190}
              height={148}
              className='absolute top-[-74px] right-[51px] opacity-5'
            />
            <Image
              src='/images/hero/linetwo.svg'
              alt='line-image'
              width={190}
              height={148}
              className='hidden xl:block absolute bottom-[-74px] right-[-38rem] opacity-5'
            />
            <div className='flex flex-col gap-5'>
              <h1 className='text-3xl max-w-2xl leading-16 text-midnight_text text-center lg:text-start mx-auto lg:mx-0 pt-5'>
                Pasistan ile otomatik KBS bildirimi
              </h1>
              <p className='text-black/75 text-lg font-normal text-center lg:text-start max-w-lg mx-auto lg:mx-0'>
                Misafir kimlik ve pasaportlarını saniyeler içinde tarayın,
                KBS bildirimleriniz otomatik olarak gönderilsin. Evrak işleriyle uğraşmayın,
                hızlı ve yasal misafir kaydı artık cebinizde.
              </p>
              <div className='mx-auto lg:mx-0'>
                <Link href='#' onClick={() => {
                  setIsSignUpOpen(true)
                }}>
                  <button className='text-white text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-primary bg-primary hover:bg-transparent hover:cursor-pointer hover:text-primary'>
                    Kayıt Ol
                  </button>
                </Link>
              </div>
              {isSignUpOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
                  <div
                    ref={signUpRef}
                    className='relative mx-auto w-full bg-white max-w-md overflow-hidden rounded-lg bg-dark_grey/90 backdrop-blur-md px-8 pt-14 pb-8 text-center'>
                    <button
                      onClick={() => setIsSignUpOpen(false)}
                      className='absolute top-0 right-0 mr-8 mt-8 dark:invert hover:cursor-pointer'
                      aria-label='Close Sign Up Modal'>
                      <Icon
                        icon='tabler:currency-xrp'
                        className='text-white hover:text-primary text-24 inline-block me-2'
                      />
                    </button>
                    <SignUp />
                  </div>
                </div>
              )}
              {/* </div> */}
            </div>
          </div>
          <div className='mt-10 lg:mt-0 lg:col-span-5'>
            <div>
              <Image
                src='/images/hero/banner.webp'
                alt='nothing'
                width={698}
                height={652}
                className='w-full'
              />
            </div>
            {/* NEW SECTION BELOW */}
            <div className='mt-6 flex justify-center gap-4'>
              <Image
                src='/images/mobile/appstore.svg'
                alt='Download on App Store'
                width={150}
                height={50}
                className='cursor-pointer hover:opacity-80 transition-opacity'
              />
              <Image
                src='/images/mobile/playstore.png'
                alt='Get it on Google Play'
                width={150}
                height={50}
                className='cursor-pointer hover:opacity-80 transition-opacity'
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Banner
