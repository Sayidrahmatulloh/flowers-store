import { posts } from '@/constants/constants'
import BlogItem from './blogItem'

function Blogs() {
  return (
    <div className='mb-24 mt-5'>
      <h2 className='mb-2 text-center text-3xl font-bold not-italic text-gray-700'>Our Blog Posts</h2>
      <p className='mb-9 text-center text-sm text-gray-500'>
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </p>
      <div className='flex items-start justify-between'>
        {posts.map((item, index) => (
          <BlogItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
export default Blogs
