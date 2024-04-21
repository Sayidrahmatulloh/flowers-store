import TheHeaderLogo from './lib/theHeaderLogo'
import TheHeaderNav from './lib/theHeaderNav'

function TheHeader() {
  return (
    <div className='mx-auto flex h-20 max-w-[1200px] items-center  justify-between border-b-[1px] border-green-100'>
      <TheHeaderLogo />
      <TheHeaderNav />
    </div>
  )
}
export default TheHeader
