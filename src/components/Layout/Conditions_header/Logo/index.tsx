import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    // <Link href='/'>
    <Image
      src='/images/pasapo_logo.svg'
      alt='logo'
      width={60}
      height={50}
      // style={{ width: 'auto', height: 'auto' }}
      quality={100}
    />
    // </Link>
  )
}

export default Logo
