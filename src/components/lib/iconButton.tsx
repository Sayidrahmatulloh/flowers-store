import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function IconButton({ icon, hasHoverClass, classes }: { icon: IconProp; hasHoverClass?: boolean; classes?: string }) {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={`${classes ? classes : 'size-6'} text-gray-500 ${hasHoverClass && 'hover:text-green-500'} cursor-pointer`}
    />
  )
}
export default IconButton
