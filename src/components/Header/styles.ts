import styled from 'styled-components'

export const Center = styled.div<{ scrolled: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  background-color: ${({ scrolled }) =>
    scrolled ? 'white' : 'rgba(0, 0, 0, 0.4)'};
  transition: height 0.3s ease;
  z-index: 100;
`

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img<{ scrolled: boolean }>`
  width: ${({ scrolled }) => (scrolled ? '70px' : '120px')};
  height: auto;
  border-radius: 100%;
`

export const Nav = styled.nav`
  display: flex;
`

export const Button = styled.button<{ scrolled: boolean }>`
  border: none;
  color: ${({ scrolled }) => (scrolled ? 'black' : 'white')};
  margin: 0 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 16px;
  text-transform: uppercase;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  letter-spacing: 1px;

  &:hover {
    color: #861418;
    transition: 0.5s;
    border-bottom: 2px solid #861418;
  }
`
