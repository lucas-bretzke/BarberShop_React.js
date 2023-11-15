/**
 * Styles.
 */
import { Main, Title, Section, ContentText, Description } from './styles'

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
  return (
    <Main style={{ backgroundImage: `url(${bannerImage})` }}>
      <Section>
        <ContentText>
          <Title>Miguelito barbearia</Title>

          <Description>
            Não aceite o básico, venha ser premium na #ropelatobarbearia!
            Elevamos sua presença com estilo e cuidados excepcionais!
          </Description>
        </ContentText>
        <BaseButton
          label='W Entrar em contato'
          onClick={() => console.log('teste')}
        />
      </Section>
    </Main>
  )
}
