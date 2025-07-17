'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import SocialSignUp from '../SocialSignUp'
import Logo from '@/components/Layout/Header/Logo'
import { useState } from 'react'
import Loader from '@/components/Common/Loader'
const SignUp = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()

    setLoading(true)
    const data = new FormData(e.currentTarget)
    const value = Object.fromEntries(data.entries())
    const finalData = { ...value }

    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('Successfully registered')
        setLoading(false)
        router.push('/signin')
      })
      .catch((err) => {
        toast.error(err.message)
        setLoading(false)
      })
  }

  return (
    <>
      <div className='mb-10 text-center mx-auto inline-block max-w-[160px]'>
        <Logo />
      </div>

      <SocialSignUp />

      <span
        className="relative my-8 block text-center z-1 
  before:content-[''] before:absolute before:left-0 before:top-3 before:h-px before:w-[40%] before:bg-black/20 
  after:content-[''] after:absolute after:right-0 after:top-3 after:h-px after:w-[40%] after:bg-black/20">
        <span className='relative z-10 inline-block px-3 text-base text-black text-body-secondary'>
          VEYA
        </span>
      </span>

      <form onSubmit={handleSubmit}>
        <div className='mb-[22px]'>
          <input
            type='text'
            placeholder='Ad'
            name='name'
            required
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary text-black focus-visible:shadow-none'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            required
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary text-black focus-visible:shadow-none'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='password'
            placeholder='Parola'
            name='password'
            required
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary text-black focus-visible:shadow-none'
          />
        </div>
        <div className='mb-9'>
          <button
            type='submit'
            className='flex w-full items-center text-18 font-medium justify-center text-white rounded-md bg-primary px-5 py-3 transition duration-300 ease-in-out hover:bg-transparent hover:text-primary border-primary border hover:cursor-pointer'>
            Kayıt Ol {loading && <Loader />}
          </button>
        </div>
      </form>

      <p className='text-body-secondary text-black text-base'>
        Hesabınız varsa
        <Link href='/' className='pl-2 text-primary hover:underline'>
          Giriş
        </Link>
      </p>
      <br/>
      <br/>
      <p className='text-body-secondary mb-4 text-left text-black text-xs'>
        Kaydını tamamlayarak{' '}
        <Link href='/#' className='text-primary hover:underline'>
          Kullanım Hüküm ve Koşulları
        </Link>'nı kabul etmiş olursun.
        <br/>
        <br/>
        Pasistan'ın kişisel verilerini nasıl topladığı, 
        kullandığı, paylaştığı ve koruduğu hakkında daha 
        fazla bilgi edinmek için lütfen Pasistan {' '}
        <Link href='/#' className='text-primary hover:underline'>
          Gizlilik Sözleşmesi
        </Link>{' '}'ni oku.
      </p>


    </>
  )
}

export default SignUp
