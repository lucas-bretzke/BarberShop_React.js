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
  const phoneNumber = '47991364809'

  function openWhatsapp() {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`

    window.open(whatsappURL, '_blank')
  }

  const [animateMain, setAnimateMain] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const triggerPosition = 600

    if (scrollPosition >= triggerPosition) {
      setAnimateMain(true)
    } else {
      setAnimateMain(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // Limpe o event listener no desmonte do componente
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Main>
      <Center>
        <Section>
          <ContainerText>
            <H1>Miguelito</H1>
            <H2>Quem somos</H2>
            <P>
              Miguelito Barbearia é um centro de estética masculina. Somos
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
            <BaseButtom
              leftIcon={faWhatsapp}
              label='Entrar em contato'
              onClick={openWhatsapp}
            />
          </ContainerText>
          <Image
            animate={animateMain}
            src={establishment}
            alt='establishment'
          />
        </Section>
      </Center>
    </Main>
  )
}
