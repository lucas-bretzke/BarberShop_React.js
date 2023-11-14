// Header.js

import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import { Logo, Nav, Button, Section, Center } from './styles'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
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
        <Logo src={logo} alt='Logo' />
        <Nav>
          <Button>Home</Button>
          <Button>Serviços</Button>
          <Button>Depoimentos</Button>
          <Button>Contato</Button>
        </Nav>
      </Section>
    </Center>
  )
}
