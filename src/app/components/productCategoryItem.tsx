function ProductCategoryItem({ text, count }: { text: string; count: number }) {
  return (
    <div
      className={`flex h-10 cursor-pointer items-center justify-between rounded-md px-2 text-sm hover:bg-gray-200/50 ${text == 'House Plants' ? 'font-bold text-green-500' : 'text-gray-500'}`}
    >
      <h3 className='text-sm'>{text}</h3>
      <span>{count}</span>
    </div>
  )
}
export default ProductCategoryItem
