import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    </div>
  )
}
export default TheFooter
