import logo from '@/assets/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'

function TheHeaderLogo() {
  return (
    <Link href='/'>
      <Image className='cursor-pointer' src={logo} alt='Next.js Logo' width={150} loading='eager' priority />
    </Link>
  )
}

export default TheHeaderLogo
