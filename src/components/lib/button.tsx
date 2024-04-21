import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Button({
  icon,
  text,
  isPrimary = true,
  isHover = true,
}: {
  icon: IconProp
  text: string
  isPrimary?: boolean
  isHover?: boolean
}) {
  const primary = isPrimary
    ? `bg-green-500 text-white ${isHover ? 'hover:bg-white hover:text-green-500' : ''}`
    : `bg-white text-green-500 ${isHover ? 'hover:bg-green-500 hover:text-white' : ''}`

  return (
    <button
      className={`flex items-center gap-2 rounded-lg  border-2 border-green-500 px-6  py-2 text-lg font-medium capitalize transition-all ${primary}`}
    >
      {icon && <FontAwesomeIcon icon={icon} className='size-6' />}
      {text}
    </button>
  )
}
export default Button
