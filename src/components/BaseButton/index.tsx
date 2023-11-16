/**
 * Styles.
 */
import { Button } from './styles'

/**
 * Icons.
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Add this import statement
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

/**
 * Types.
 */
interface BaseButtonProps {
  label: string
  onClick: () => void
  leftIcon: any
}

/**
 * Component.
 */
export default function BaseButton({
  label,
  onClick,
  leftIcon
}: BaseButtonProps) {
  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={leftIcon} size='xl' /> {label}
    </Button>
  )
}
