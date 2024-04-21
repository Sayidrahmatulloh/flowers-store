'use client'
import { navList } from '@/constants/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function TheHeaderNav() {
  const pathname = usePathname()
  return (
    <div className='flex gap-8'>
      {navList.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`cursor-pointer text-lg capitalize leading-[80px] hover:border-b-4 hover:border-green-500 hover:text-green-500 ${pathname == item.href ? 'border-b-4 border-green-500 font-bold text-green-500' : 'font-normal'}`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}
export default TheHeaderNav
