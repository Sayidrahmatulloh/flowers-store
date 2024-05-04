import { newsList } from '@/constants/constants'
import Button from './button'
import NewsItem from './newsItem'

function News() {
  return (
    <div className='flex items-center'>
      <div className='flex items-center justify-start'>
        {newsList.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </div>
      <div className='max-w-[400px]'>
        <h1 className='mb-5 text-base font-bold text-gray-700'>Would you like to join newsletters?</h1>
        <label className='mb-4 flex h-10 max-w-[400px] items-center'>
          <input
            type='email'
            placeholder='enter your email address...'
            className='h-full w-full rounded-l-md border border-slate-300 px-6 py-2 outline-none placeholder:text-sm placeholder:text-gray-500'
          />
          <Button text='Subscribe' classes='border-none rounded-none rounded-r-md' isHover={false} />
        </label>
        <p className='tracking[1px] text-sm leading-6 text-gray-500'>
          We usually post offers and challenges in newsletter. We are your online houseplant destination. We offer a
          wide range of houseplants and accessories shipped directly from our (green)house to yours!{' '}
        </p>
      </div>
    </div>
  )
}
export default News
