import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'

/**
 * Styles.
 */
import {
  Center,
  H1,
  H2,
  Main,
  Section,
  Image,
  ContainerText,
  P
} from './styles'

/**
 * Images.
 */
import fazendoABarba from '../../../../assets/fazendo-a-barba.jpg'
import { useEffect, useState } from 'react'

/**
 *  Component.
 */
export default function Differences() {
  const [animation, setAnimation] = useState(false)

  const handleScroll = () => {
    window.scrollY >= 1300 ? setAnimation(true) : setAnimation(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Main>
      <Center>
        <Section>
          <Image src={fazendoABarba} alt='fazendoABarba' />

          <ContainerText animate={animation}>
            <H1>NOSSOS DIFERENCIAIS</H1>
            <H2>
              Todo o <span>cuidado, sofisticação</span> e <span>qualidade</span>{' '}
              da Miguelito Barbearia.
            </H2>

            <P>
              Oferecemos um diferencial exclusivo: a{' '}
              <span>Experiência VIP</span>! Viva a sensação de ser tratado como
              uma estrela durante cada serviço. A{' '}
              <span>Miguelito Barbearia</span> vai além do corte e barba,
              proporcionando momentos únicos de relaxamento e cuidado.
            </P>
            <P>
              <FontAwesomeIcon
                icon={faUserCheck}
                color='#861418'
                size='4x'
                style={{ position: 'absolute', marginLeft: '-6%' }}
              />
              Oferecemos também nosso <span>PLANO DE ASSINATURA!</span> Já
              pensou em estar com o visual sempre em dia? Cabelo e Barba feitos
              toda semana? Com o <span>PLANO DE ASSINATURA</span> da Miguelito
              Barbearia, você tem um pacote para sempre manter seu
              <span>visual atualizado!</span>
            </P>
          </ContainerText>
        </Section>
      </Center>
    </Main>
  )
}
