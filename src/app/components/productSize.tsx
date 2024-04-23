import { size } from '@/constants/constants'
import ProductCategoryItem from './productCategoryItem'
import ProductCategoryTitle from './productCategoryTitle'

function ProductSize() {
  return (
    <>
      <ProductCategoryTitle text='Size' />
      {size.map((item, i) => (
        <ProductCategoryItem key={i} text={item.type} count={item.count} isActive={item.type == 'Small'} />
      ))}
    </>
  )
}
export default ProductSize
