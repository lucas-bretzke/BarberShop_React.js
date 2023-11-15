/**
 * Styles.
 */
import { Button } from './styles'

/**
 * Icons.
 */
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Types.
 */
interface BaseButtonProps {
  label: string
  onClick: () => void
}

/**
 * Component.
 */
export default function BaseButton({ label, onClick }: BaseButtonProps) {
  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={faWhatsapp} size='xl' /> {' '} {label}
    </Button>
  )
}
