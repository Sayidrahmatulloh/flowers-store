import Image from 'next/image'
import Link from 'next/link'

function TheHeaderLogo() {
  return (
    <Link href="/">
      <Image src="/Logo.svg" alt="Next.js Logo" width={150} height={37} priority />
    </Link>
  )
}
export default TheHeaderLogo
