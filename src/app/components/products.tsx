import ProductCards from './productCards'
import ProductCategories from './productCategories'

function Products() {
  return (
    <div className='flex items-start gap-14'>
      <ProductCategories />
      <ProductCards />
    </div>
  )
}
export default Products
