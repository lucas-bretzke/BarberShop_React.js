import { Main, Section, Logo, Center } from './styles'
import logo from '../../../../assets/logo.png'
import {
  faFacebook,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 *  Component.
 */
export default function Footer() {
  return (
    <Main id='footer'>
      <Center>
        <Logo src={logo} alt='Logo' />
        <div>
          <a>
            <FontAwesomeIcon icon={faFacebook} size='2x' color='white' />
          </a>
          <a>
            <FontAwesomeIcon icon={faInstagram} size='2x' color='white' />
          </a>
          <a>
            <FontAwesomeIcon icon={faWhatsapp} size='2x' color='white' />
          </a>
        </div>
      </Center>
      <Section>
        <h2>2023 © MIGUELITO BARBEARIA</h2>
        <span>|</span>
        <h2>BRETZKE_BRETZKE</h2>
      </Section>
    </Main>
  )
}
