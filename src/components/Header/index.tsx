import React from 'react'
import logo from '../../assets/logo.png'
import { Logo, Nav, Button, Section } from './styles'

export default function Header() {
  return (
    <Section>
      <Logo src={logo} alt='Logo' />
      <Nav>
        <Button>Home</Button>
        <Button>Serviços</Button>
        <Button>Depoimentos</Button>
        <Button>Contato</Button>
      </Nav>
    </Section>
  )
}
