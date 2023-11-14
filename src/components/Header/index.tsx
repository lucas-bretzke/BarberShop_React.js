import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import { Logo, Nav, Button, Section, Center } from './styles'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Center scrolled={scrolled}>
      <Section>
        <Logo scrolled={scrolled} src={logo} alt='Logo' />
        <Nav>
          <Button scrolled={scrolled}>Home</Button>
          <Button scrolled={scrolled}>Serviços</Button>
          <Button scrolled={scrolled}>Depoimentos</Button>
          <Button scrolled={scrolled}>Contato</Button>
        </Nav>
      </Section>
    </Center>
  )
}
