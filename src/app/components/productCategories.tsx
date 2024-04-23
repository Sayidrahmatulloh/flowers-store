import { productCategoriesAndCount } from '@/constants/constants'
import ProductCategoryItem from './productCategoryItem'
import ProductCategoryTitle from './productCategoryTitle'
import ProductDiscounted from './productDiscounted'
import ProductPriceRange from './productPriceRange'
import ProductSize from './productSize'

function ProductCategories() {
  return (
    <div className='min-w-80 rounded bg-gradient-to-b from-gray-100/80 to-gray-50/50 p-5'>
      <ProductCategoryTitle text='Categories' />
      <div className='mb-4 pl-5'>
        {productCategoriesAndCount.map((item, i) => (
          <ProductCategoryItem
            key={i}
            text={item.categoryName}
            count={item.count}
            isActive={item.categoryName == 'House Plants'}
          />
        ))}
      </div>
      <ProductPriceRange />
      <ProductSize />
      <ProductDiscounted />
    </div>
  )
}
export default ProductCategories
