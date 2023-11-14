/**
 * Styles.
 */
import {
  Main,
  Title,
  Button,
  Section,
  ContentText,
  Description
} from './styles'

/**
 * Images.
 */
import bannerImage from '../../assets/banner.jpg'

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

        <Button>W Entrar em contato</Button>
      </Section>
    </Main>
  )
}
