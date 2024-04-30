import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge'

function Button({
  icon,
  iconPosition = 'left',
  text,
  isPrimary = true,
  isHover = true,
  classes,
}: {
  icon?: IconProp
  iconPosition?: 'left' | 'right'
  text: string
  isPrimary?: boolean
  isHover?: boolean
  classes?: string
}) {
  const primary = isPrimary
    ? `bg-green-500 text-white ${isHover ? 'hover:bg-white hover:text-green-500' : ''}`
    : `bg-white text-green-500 ${isHover ? 'hover:bg-green-500 hover:text-white' : ''}`

  return (
    <button
      className={twMerge(
        'flex items-center gap-2 rounded-lg  border-2 border-green-500 px-6  py-2 text-lg font-medium capitalize transition-all ',
        primary,
        classes,
      )}
    >
      {iconPosition === 'left' && icon && <FontAwesomeIcon icon={icon} className='size-6' />}
      {text}
      {iconPosition === 'right' && icon && <FontAwesomeIcon icon={icon} className='size-6' />}
    </button>
  )
}
export default Button
