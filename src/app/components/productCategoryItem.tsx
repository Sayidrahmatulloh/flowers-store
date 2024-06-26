function ProductCategoryItem({ text, count, isActive }: { text: string; count: number; isActive?: boolean }) {
  return (
    <div
      className={`flex h-10 cursor-pointer items-center justify-between rounded-md px-3 text-sm hover:bg-slate-200/80 ${isActive ? 'font-bold text-green-500' : 'text-gray-500'}`}
    >
      <h3 className='text-sm'>{text}</h3>
      <span>{count}</span>
    </div>
  )
}
export default ProductCategoryItem
