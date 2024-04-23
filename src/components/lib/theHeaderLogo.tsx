import logo from '@/assets/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'

function TheHeaderLogo() {
  return (
    <Link href='/'>
      <Image className='cursor-pointer' src={logo} alt='logo' width={150} priority />
    </Link>
  )
}

export default TheHeaderLogo
