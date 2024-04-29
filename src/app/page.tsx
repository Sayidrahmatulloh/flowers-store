import Blogs from './components/blogs'
import MainBanner from './components/mainBanner'
import Products from './components/products'

export default function Home() {
  return (
    <div className=''>
      <div className='mb-12'>
        <MainBanner />
      </div>
      <Products />
      <Blogs />
    </div>
  )
}
