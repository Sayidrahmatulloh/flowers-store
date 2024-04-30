import { filter } from '@/constants/constants'

function ProductFilter() {
  return (
    <div className='mb-9 flex w-full items-center justify-between'>
      <div className='flex items-center gap-9'>
        {filter.map((item, index) => (
          <h2
            key={index}
            className={`${item.typeValue == 'all' ? 'border-b-2 border-green-500 font-bold text-green-500' : 'font-normal text-gray-500'}`}
          >
            {item.typeText}
          </h2>
        ))}
      </div>
      <div>
        Sort By:
        <select defaultValue='default' className='rounded-md bg-white px-4 py-2 text-gray-500 focus:outline-none'>
          <option value='default'>Default Sort</option>
          {filter.map((item, index) => (
            <option key={index} value={item.typeValue}>
              {item.typeText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
export default ProductFilter
