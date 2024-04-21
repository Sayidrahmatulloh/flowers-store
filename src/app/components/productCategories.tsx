import { productCategoriesAndCount } from '@/constants/constants'
import ProductCategoryItem from './productCategoryItem'
import ProductCategoryTitle from './productCategoryTitle'
import ProductDiscounted from './productDiscounted'
import ProductPriceRange from './productPriceRange'

function ProductCategories() {
  return (
    <div className='w-1/4 bg-gray-50 p-5'>
      <ProductCategoryTitle text='Categories' />
      <div className='mb-4 pl-5'>
        {productCategoriesAndCount.map((item, i) => (
          <ProductCategoryItem key={i} text={item.categoryName} count={item.count} />
        ))}
      </div>
      <ProductCategoryTitle text='Price Range' />
      <div>
        <ProductPriceRange />
      </div>
      <ProductDiscounted />
    </div>
  )
}
export default ProductCategories
