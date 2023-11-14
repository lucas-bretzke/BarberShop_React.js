// styles.js

import styled from 'styled-components'

export const Section = styled.section`
  position: fixed;
  width: 100%;
  max-width: 1200px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 120px;
  margin-top: 20px;
  height: auto;
  border-radius: 100%;
`

export const Nav = styled.nav`
  display: flex;
`

export const Button = styled.button`
  border: none;
  color: grey;
  margin: 0 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 16px;
  text-transform: uppercase;
  background-color: transparent;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #861418;
    transition: 1s;
    border-bottom: 2px solid #861418;
  }
`
