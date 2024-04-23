import Button from '@/components/lib/button'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductCategoryTitle from './productCategoryTitle'

function ProductPriceRange() {
  return (
    <>
      <ProductCategoryTitle text='Price Range' />
      <div className='flex flex-col items-start gap-4 px-2 pl-5'>
        <h4 className='flex items-center tracking-widest text-gray-500'>
          Price:
          <span className='flex items-center font-bold text-green-500'>
            39
            <FontAwesomeIcon className='size-4' icon={faDollarSign} /> &#8211; 1230
            <FontAwesomeIcon className='size-4' icon={faDollarSign} />
          </span>
        </h4>
        <Button text='Filter' classes='mx-auto px-8 py-1' />
      </div>
    </>
  )
}
export default ProductPriceRange
