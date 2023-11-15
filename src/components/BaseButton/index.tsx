/**
 * Styles.
 */
import { Button } from './styles'

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
  return <Button onClick={onClick}>{label}</Button>
}
