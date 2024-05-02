import bannerImg from '@/assets/Banner.png'
import Button from '@/components/lib/button'
import Image from 'next/image'
function MainBanner() {
  return (
    <div className='flex h-[500px] w-full items-center bg-slate-50 p-10'>
      <div className='w-2/3'>
        <span className='mb-4 font-medium uppercase tracking-[1px] text-gray-600'>Welcome to GreenShop</span>
        <h1 className='mb-2 text-7xl font-bold uppercase not-italic text-gray-700'>
          Lets Make a <br /> Better <span className='text-green-500'>Planet</span>
        </h1>
        <p className='mb-14 w-[90%] text-sm leading-5 tracking-wider text-gray-500/90'>
          We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an
          unique Urban Jungle. Order your favorite plants
        </p>
        <Button text={'Shop Now'} isHover={true} />
      </div>
      <div className='relative w-1/3'>
        <Image className='h-full object-cover' src={bannerImg} alt='banner' loading='lazy' height={500} />
        <Image className='absolute bottom-10 h-32 w-32' src={bannerImg} alt='banner' loading='lazy' />
      </div>
    </div>
  )
}
export default MainBanner
