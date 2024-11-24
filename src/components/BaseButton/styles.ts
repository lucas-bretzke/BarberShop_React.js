import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Button = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  font-size: 15px;
  padding: 20px;
  margin-top: 20px;
  text-transform: uppercase;
  background-color: #861418;
  letter-spacing: 2px;

  &:hover {
    transition: 1s;
    background-color: #ba1b1f;
  }

  @media ${breakpoints.sm} {
    font-size: 12px;
  }
`
