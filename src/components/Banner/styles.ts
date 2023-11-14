// styles.js

import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  height: 120vh;
`

export const Section = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ContentText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 30px;
`

export const Title = styled.h1`
  color: white;
  font-size: 40px;
  text-transform: uppercase;
`

export const Description = styled.p`
  color: white;
  margin: 40px 0;
  font-size: 26px;
  max-width: 50%;
  text-align: center;
`

export const Button = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  font-size: 15px;
  padding: 20px;
  text-transform: uppercase;
  background-color: #861418;
  letter-spacing: 2px;

  &:hover {
    transition: 1s;
    background-color: #ba1b1f;
  }
`
