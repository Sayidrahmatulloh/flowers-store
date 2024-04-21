import ProductCards from './productCards'
import ProductCategories from './productCategories'

function Products() {
  return (
    <div className='flex items-start justify-between'>
      <ProductCategories />
      <ProductCards />
    </div>
  )
}
export default Products
