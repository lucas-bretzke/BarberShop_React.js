import React, { useEffect, useState } from 'react'
import {
  H1,
  Main,
  H2,
  Section,
  ContainerContacts,
  MapContainer,
  Center
} from './styles'
import Maps from '../../../../components/Maps'

/**
 *  Component.
 */
export default function Contact() {
  const latitude = -26.8819
  const longitude = -49.0483

  const [animation, setAnimation] = useState(false)

  const handleScroll = () => {
    window.scrollY >= 4000 ? setAnimation(true) : setAnimation(false)
    window.scrollY >= 3500 ? setAnimation(true) : setAnimation(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Main id='contact'>
      <Center animate={animation}>
        <H1>Contato</H1>
        <H2>Fale conosco</H2>

        <Section>
          <ContainerContacts>
            <h3>Whatsapp</h3>
            <a>(47) 93619-6572</a>
            <h3>E-mail</h3>
            <a>contato@miguelitobarberia.com.br</a>
            <h3>funcionamento</h3>
            <a>Segunda a Sábado, das 08h – 20h</a>
            <h3>Endereço</h3>

            <p>
              Rua Infante Dom Henrique, 190 – Salto Weissbach Blumenau, SC –
              89032-020 - Sobreloja
            </p>
          </ContainerContacts>
          <MapContainer>
            <Maps latitude={latitude} longitude={longitude} />
          </MapContainer>
        </Section>
      </Center>
    </Main>
  )
}
