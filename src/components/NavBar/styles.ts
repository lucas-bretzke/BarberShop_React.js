import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Center = styled.div<{ scrolled: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 65px;
  padding: 10px 0;
  background-color: ${({ scrolled }) =>
    scrolled ? 'white' : 'rgba(0, 0, 0, 0.4)'};
  transition: height 0.3s ease;
  z-index: 100;
  opacity :0.9: 0.9;
  box-shadow: 0px 2px 30px 1px #4444;
`

export const Section = styled.section`
  width: 100vw;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const Logo = styled.img<{ scrolled: boolean }>`
  width: 70px;
  margin-top: ${({ scrolled }) => (scrolled ? '0' : '2.5%')};
  height: auto;
  border-radius: 100%;
  box-shadow: 0px 3px 10px 2px #4444;
`

export const Nav = styled.nav`
  display: flex;

  @media ${breakpoints.md} {
    width: auto;
    height: auto;
    position: fixed;
    right: 0;
    top: 65px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Button = styled.button<{ scrolled?: boolean }>`
  display: flex;
  border: none;
  color: ${({ scrolled }) => (scrolled ? 'black' : '#c9c9c9')};
  margin: 0 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  letter-spacing: 1px;

  &:hover {
    color: #861418;
    transition: 0.5s;
    border-bottom: 2px solid #861418;
  }

  @media ${breakpoints.md} {
    width: 100%;
    background-color: white;
    opacity: 0.9;
    color: black;
  }
`
