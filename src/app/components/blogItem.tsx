import Button from '@/components/lib/button'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

function BlogItem({
  image,
  dateTime,
  title,
  description,
}: {
  image: string
  dateTime: string
  title: string
  description: string
}) {
  return (
    <div className='min-h-96 w-64 rounded-xl shadow-lg transition-all hover:shadow-xl'>
      <div className='relative h-48 w-full'>
        <Image src={`/posts/${image}`} alt={title} className='w-full object-cover' fill loading='lazy' />
      </div>
      <div className='m-4'>
        <h4 className='text-sm text-green-500'>{dateTime}</h4>
        <h2 className='text-2xl font-bold text-gray-700'>{title}</h2>
        <p className='mt-2 text-sm text-gray-500'>{description}</p>
      </div>
      <div className='m-2'>
        <Button
          text={'Read More'}
          icon={faArrowRight}
          iconPosition='right'
          isPrimary={false}
          isHover={true}
          classes='border-none text-gray-700'
        />
      </div>
    </div>
  )
}
export default BlogItem
