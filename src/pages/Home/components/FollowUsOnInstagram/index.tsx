/**
 * Images.
 */
import logo from '../../../../assets/logo.png'

/**
 * Icons.
 */
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Add this import statement

/**
 * Styles.
 */
import { Section, H1, H2, Main, ImageWithIcon, H3, P } from './styles'

/**
 * Components.
 */
import BaseButton from '../../../../components/BaseButton'
import { useEffect, useState } from 'react'

/**
 *  Component.
 */
export default function FollowUsOnInstagram() {
  const [animation, setAnimation] = useState(false)

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/miguelitobarberia/')
  }

  const handleScroll = () => {
    window.scrollY >= 3100 ? setAnimation(true) : setAnimation(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Main id='followUs'>
      <Section animate={animation}>
        <div style={{ marginBottom: '120px' }}>
          <H1>Trabalhos</H1>
          <H2>Clientes & mídias sociais</H2>
          <H3>
            Siga-nos no Instagram! <br /> @miguelitobarberia
          </H3>
          <P>Fique por dentro de todas as novidades e veja nossos trabalhos.</P>
          <BaseButton
            leftIcon={faInstagram}
            label={'Nosso instagram'}
            onClick={handleInstagramClick}
          />
        </div>

        <ImageWithIcon>
          <img src={logo} alt='logo' />
          <FontAwesomeIcon
            icon={faInstagram}
            color='white'
            style={{ fontSize: '6rem' }}
          />
        </ImageWithIcon>
      </Section>
    </Main>
  )
}
