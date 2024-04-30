import { faCartShopping, faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Button from './lib/button'
import IconButton from './lib/iconButton'
import TheHeaderLogo from './lib/theHeaderLogo'
import TheHeaderNav from './lib/theHeaderNav'

function TheHeader() {
  return (
    <div className='mx-auto flex h-20 max-w-7xl items-center  justify-between border-b-[1px] border-green-100'>
      <TheHeaderLogo />
      <TheHeaderNav />
      <div className='flex items-center gap-8'>
        {[faSearch, faCartShopping].map((icon, index) => (
          <IconButton key={index} icon={icon} hasHoverClass={false} classes={'size-5'} />
        ))}
        <Button icon={faSignOut} text={'login'} />
      </div>
    </div>
  )
}
export default TheHeader
