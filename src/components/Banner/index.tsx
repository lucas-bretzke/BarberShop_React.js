import React from 'react'
import bannerImage from '../../assets/banner.jpg' // Importe a imagem corretamente
import {
  Title,
  Main,
  Button,
  Section,
  ContentText,
  Description
} from './styles'

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
