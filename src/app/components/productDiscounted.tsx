import { faPercent } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
function ProductDiscounted() {
  return (
    <div className='flex flex-col items-center gap-2 rounded-lg border bg-white p-2 pt-0'>
      <Image className='w-full' src={'/SuperSale.svg'} alt='super sale' width={200} height={200} />
      <h2 className='flex items-center text-2xl font-bold uppercase text-gray-600'>
        Up to 75
        <FontAwesomeIcon icon={faPercent} className='mr-2 size-4' /> off
      </h2>
      <Image className='w-full' src={'/DiscountedFlower.png'} alt='discount' width={200} height={200} />
    </div>
  )
}
export default ProductDiscounted
