import visa from '@/assets/Visa.png'
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import TheHeaderLogo from './lib/theHeaderLogo'

function TheFooter() {
  return (
    <div>
      <div className='flex w-full items-center justify-between border bg-slate-100 p-6'>
        <div className='w-40'>
          <TheHeaderLogo />
        </div>
        <div className='flex items-center gap-3'>
          <FontAwesomeIcon icon={faLocationDot} className='size-4 text-green-500' />
          <span className='text-base text-gray-700'>
            70 West Buckingham Ave. <br /> Farmingdale, NY 11735
          </span>
        </div>
        <div className='flex items-center gap-3'>
          <FontAwesomeIcon icon={faEnvelope} className='size-4 text-green-500' />
          <span className='text-base text-gray-700'>contact@greenshop.com</span>
        </div>
        <div className='flex items-center gap-3'>
          <FontAwesomeIcon icon={faPhone} className='size-4 text-green-500' />
          <span className='text-base text-gray-700'>+88 01911 717 490</span>
        </div>
      </div>
      <div className='flex items-start justify-between px-6 py-8 not-italic'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-lg font-bold text-gray-700'>My Account</h1>
          {['My Account', 'Our Stores', 'Contact Us', 'Career', 'Specials'].map((item, index) => (
            <h2 key={index} className='text-sm font-normal italic text-gray-600'>
              {item}
            </h2>
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-lg font-bold text-gray-700'>Help & Guide</h1>
          {['Help Center', 'How to Buy', 'Shipping & Delivery', 'Product Police', 'How to Return'].map(
            (item, index) => (
              <h2 key={index} className='text-sm font-normal italic text-gray-600'>
                {item}
              </h2>
            ),
          )}
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-lg font-bold text-gray-700'>Categories</h1>
          {['House Plants', 'Potter Plants', 'Seeds', 'Small Plants', 'Accessories'].map((item, index) => (
            <h2 key={index} className='text-sm font-normal italic text-gray-600'>
              {item}
            </h2>
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-lg font-bold text-gray-700'>Social Media</h1>
          <div className='flex gap-3'>
            {[faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube].map((item, index) => (
              <FontAwesomeIcon
                icon={item}
                key={index}
                className='size-8 cursor-pointer rounded-md border-2 border-slate-300 p-1 text-green-500/60 hover:text-green-500'
              />
            ))}
          </div>
          <h1 className='text-lg font-bold text-gray-700'>We accept</h1>
          <div className='flex gap-3'>
            <Image src={visa} alt='visa' width={224} height={24} />
          </div>
        </div>
      </div>
      <div className='w-full p-2'>
        <h2 className='text-center not-italic text-gray-600'>© 2021 GreenShop. All Rights Reserved.</h2>
      </div>
    </div>
  )
}
export default TheFooter
