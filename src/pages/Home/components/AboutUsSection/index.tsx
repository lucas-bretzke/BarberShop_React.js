/**
 * Styles.
 */
import {
  Center,
  H1,
  H2,
  H3,
  Main,
  Section,
  Image,
  ContainerText,
  P,
  Line,
  Button
} from './styles'

/**
 * Images.
 */
import establishment from '../../../../assets/miguelito-loja.png'

/**
 *  Component.
 */
export default function AboutUsSection() {
  return (
    <Main>
      <Center>
        <Section>
          <ContainerText>
            <H1>Miguelito</H1>
            <H2>Quem somos</H2>
            <P>
              Ropelato Barbearia é um centro de estética masculina. Somos
              especialistas no preparo de seu cabelo e barba para o dia a dia,
              trabalho, formaturas, aniversários e casamentos.
            </P>

            <div>
              <div>
                <Line />
                <H3 style={{ marginLeft: 20 }}>NOSSOS IDEAIS</H3>
                <P style={{ marginLeft: 20 }}>
                  Prezamos sempre pela melhor experiência ao cliente, desde o
                  atendimento até a realização dos procedimentos estéticos com
                  as melhores marcas do planeta!
                </P>
                <P style={{ marginLeft: 20 }}>
                  Nossos Profissionais possuem todo o conhecimento técnico e
                  específico para um serviço de excelência, completamente
                  IMPECÁVEL!
                </P>
              </div>
            </div>
            <Button>W Entrar em contato</Button>
          </ContainerText>
          <Image src={establishment} alt='establishment' />
        </Section>
      </Center>
    </Main>
  )
}
