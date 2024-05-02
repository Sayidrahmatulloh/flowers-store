import IconButton from '@/components/lib/iconButton'
import { faCartPlus, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

function ProductCardItem({
  image,
  name,
  currentPrice,
  oldPrice,
  discount,
}: {
  image: string
  name: string
  currentPrice: number
  oldPrice?: number | null
  discount?: number | null
}) {
  return (
    <div className='group relative flex w-full flex-col gap-2  rounded-lg border-2 border-slate-100 hover:border-t-green-500'>
      {discount && (
        <span className='absolute right-2 top-2 z-10 flex items-center gap-1 rounded-full bg-green-500 px-2 py-1 text-sm font-bold not-italic text-white'>
          {discount} % OFF
        </span>
      )}
      <div className='relative mb-5 mt-2 size-60'>
        <Image
          src={`/products/${encodeURIComponent(image)}`}
          alt={name}
          className='w-full object-cover'
          fill
          loading='lazy'
        />
      </div>
      <div className='flex items-center justify-center gap-6 px-4 pb-2'>
        {[faCartPlus, faHeart, faSearch].map((item, index) => (
          <IconButton
            key={index}
            icon={item}
            classes='size-5 text-gray-500 hover:text-green-500 opacity-0 group-hover:opacity-100'
          />
        ))}
      </div>
      <div className='px-4'>
        <h3 className='mb-1 text-lg tracking-wider text-gray-700'>{name}</h3>
        <div className='mb-2 flex items-center gap-4 font-medium not-italic text-green-500'>
          <span className='flex items-center text-sm'>${currentPrice.toFixed(2)}</span>
          {oldPrice && (
            <span className='ml-2 flex items-center text-sm text-gray-400 line-through'>${oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  )
}
export default ProductCardItem
