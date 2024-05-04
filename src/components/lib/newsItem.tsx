import Image from 'next/image'

function NewsItem({ img, title, description }: { img: string; title: string; description: string }) {
  return (
    <div className='flex max-w-64 flex-col p-5'>
      <div className='relative mb-4 h-24 w-24'>
        <Image src={`/news/${img}`} alt={title} className='h-full object-contain' fill />
      </div>
      <h2 className='mb-2 text-base font-bold text-gray-700'>{title}</h2>
      <p className='mt-2 text-sm text-gray-500'>{description}</p>
    </div>
  )
}

export default NewsItem
