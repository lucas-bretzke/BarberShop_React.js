import React, { useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
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

  function scrollToTop() {
    const scrollStep = -window.scrollY / (500 / 15)
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 15)
  }

  return (
    <Center scrolled={scrolled}>
      <Section>
        <Logo scrolled={scrolled} src={logo} alt='Logo' />
        <Nav>
          <Button scrolled={scrolled} onClick={scrollToTop}>
            Home
          </Button>
          <Button scrolled={scrolled}>
            <Link to='services' smooth duration={500}>
              Serviços
            </Link>
          </Button>
          <Button scrolled={scrolled}>
            <Link to='followUs' smooth duration={500}>
              Clientes e mídias
            </Link>
          </Button>
          <Button scrolled={scrolled}>
            <Link to='contact' smooth duration={500}>
              Contato
            </Link>
          </Button>
        </Nav>
      </Section>
    </Center>
  )
}
