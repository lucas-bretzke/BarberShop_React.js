import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../assets/logo.png'

import { Logo, Nav, Button, Section, Center } from './styles'
import { isConstructorDeclaration } from 'typescript'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [showNav, setShowNav] = useState(window.innerWidth >= 600)

  const createLinkSection = (label: string, to: string) => (
    <Button scrolled={scrolled}>
      <Link to={to} smooth duration={500} style={{ padding: '8px 16px' }}>
        {label}
      </Link>
    </Button>
  )

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
        {showNav ? (
          <Nav>
            {createLinkSection('Home', 'banner')}
            {createLinkSection('Serviços', 'services')}
            {createLinkSection('Clientes e mídias', 'followUs')}
            {createLinkSection('Contato', 'contact')}
          </Nav>
        ) : (
          <FontAwesomeIcon icon={faBars} onClick={() => console.log('Teste Clicou')} />
        )}
      </Section>
    </Center>
  )
}

export default Header
