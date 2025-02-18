import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../assets/logo.png'

import { Logo, Nav, Button, Section, Center } from './styles'

export default function NavBar() {
  const [scrolled, setScrolled] = useState<boolean>(false)

  const [showNav, setShowNav] = useState(window.innerWidth >= 768 || false)

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

        {window.innerWidth <= 768 && (
          <FontAwesomeIcon
            icon={faBars}
            color={scrolled ? 'black' : 'white'}
            size='2x'
            onClick={() => setShowNav(!showNav)}
          />
        )}
        <Nav>
          {(window.innerWidth >= 768 || showNav) && (
            <>
              {createLinkSection('Home', 'banner')}
              {createLinkSection('Serviços', 'services')}
              {createLinkSection('Clientes e mídias', 'followUs')}
              {createLinkSection('Contato', 'contact')}
            </>
          )}
        </Nav>
      </Section>
    </Center>
  )
}
