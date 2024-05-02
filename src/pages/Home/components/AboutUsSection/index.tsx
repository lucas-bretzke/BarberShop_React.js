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
  Line
} from './styles'

/**
 * Icons.
 */
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

/**
 * Images.
 */
import establishment from '../../../../assets/miguelito-loja.png'
import BaseButtom from '../../../../components/BaseButton'
import { useEffect, useState } from 'react'

/**
 *  Component.
 */
export default function AboutUsSection() {
  const [animation, setAnimation] = useState(false)

  function openWhatsapp() {
    const phoneNumber = '47991364809'
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`

    window.open(whatsappURL, '_blank')
  }

  const handleScroll = () => {
    window.scrollY >= 550 ? setAnimation(true) : setAnimation(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Main id='AboutUsSection'>
      <Center>
        <Section animate={animation}>
          <ContainerText>
            <H1>Miguelito</H1>
            <H2>Quem somos</H2>
            <P>
              Miguelito Barbearia é um centro de estética masculina. Somos
              especialistas no preparo de seu cabelo e barba para o dia a dia,
              trabalho, formaturas, aniversários e casamentos.
            </P>
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
            <BaseButtom
              leftIcon={faWhatsapp}
              label='Entrar em contato'
              onClick={openWhatsapp}
            />
          </ContainerText>
          <Image src={establishment} alt='establishment' />
        </Section>
      </Center>
    </Main>
  )
}
