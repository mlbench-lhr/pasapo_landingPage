'use client'
import Logo from './Logo'

const Header: React.FC = () => {
  return (
    <header className='z-40 w-full transition-all fixed top-0 duration-300 py-3 bg-white shadow-lg'>
      <div className='container flex items-center justify-between'>
        <Logo />
      </div>
    </header>
  )
}

export default Header
