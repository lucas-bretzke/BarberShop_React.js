import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.png'
import { Logo, Nav, Button, Section, Center } from './styles'

const Header = () => {
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

  const createLinkSection = (label: string, to: string) => (
    <Button scrolled={scrolled}>
      <Link to={to} smooth duration={500} style={{ padding: '8px 16px' }}>
        {label}
      </Link>
    </Button>
  )

  return (
    <Center scrolled={scrolled}>
      <Section>
        <Logo scrolled={scrolled} src={logo} alt='Logo' />
        <Nav>
          {createLinkSection('Home', 'banner')}
          {createLinkSection('Serviços', 'services')}
          {createLinkSection('Clientes e mídias', 'followUs')}
          {createLinkSection('Contato', 'contact')}
        </Nav>
      </Section>
    </Center>
  )
}

export default Header
