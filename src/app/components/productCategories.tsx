import ProductCategoryItem from './productCategoryItem'
import ProductCategoryTitle from './productCategoryTitle'
import ProductDiscounted from './productDiscounted'

function ProductCategories() {
  return (
    <div>
      <ProductCategoryTitle />
      <ProductCategoryItem />
      <ProductDiscounted />
    </div>
  )
}
export default ProductCategories
