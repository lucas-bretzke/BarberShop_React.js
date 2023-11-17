/**
 * Styles.
 */
import { Main, Title, Section, ContentText, Description } from './styles'

/**
 * Icons.
 */
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

/**
 * Images.
 */
import bannerImage from '../../assets/banner.jpg'

/**
 * Components.
 */
import BaseButton from '../../components/BaseButton'

/**
 * Component.
 */
export default function Banner() {
  const phoneNumber = '47991364809'

  function openWhatsapp() {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`

    window.open(whatsappURL, '_blank')
  }

  return (
    <Main id='banner' style={{ backgroundImage: `url(${bannerImage})` }}>
      <Section>
        <ContentText>
          <Title>Miguelito barbearia</Title>

          <Description>
            Não aceite o básico, venha ser premium na #miguelitobarbearia!
            Elevamos sua presença com estilo e cuidados excepcionais!
          </Description>
        </ContentText>
        <BaseButton
          leftIcon={faWhatsapp}
          label='Entrar em contato'
          onClick={openWhatsapp}
        />
      </Section>
    </Main>
  )
}
