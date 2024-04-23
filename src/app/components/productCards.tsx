import { products } from '@/constants/constants'
import ProductCardItem from './productCardItem'
import ProductFilter from './productFilter'

function ProductCards() {
  return (
    <div className='w-full'>
      <ProductFilter />
      <div className='grid grid-cols-3 gap-10'>
        {products.map((item, i) => (
          <ProductCardItem
            key={i}
            image={item.image}
            name={item.name}
            currentPrice={item.currentPrice}
            oldPrice={item.oldPrice}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  )
}
export default ProductCards
