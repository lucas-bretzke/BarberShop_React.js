// styles.js

import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
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
