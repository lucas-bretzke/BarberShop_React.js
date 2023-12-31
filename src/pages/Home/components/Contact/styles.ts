import styled from 'styled-components'

interface AnimationProps {
  animate: boolean
}

export const Main = styled.main`
  width: 100%;
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eaebeb;
`

export const Center = styled.div<AnimationProps>`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;

  opacity: ${({ animate }) => (animate ? '1' : '0')};
  transition: 1.5s ease;
`
export const H1 = styled.h1`
  position: relative;
  font-size: 100px;
  color: #a8a9aa;
  font-weight: 100;
  margin: 0;
  padding: 0;
  padding-top: 30px;
  letter-spacing: 35px;
  text-transform: uppercase;
  z-index: 1;
`

export const H2 = styled.h2`
  font-size: 50px;
  color: #861418;
  font-weight: 100;
  z-index: 2;
  margin: 0;
  padding: 0;
  letter-spacing: 5px;
  text-transform: uppercase;
`
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ContainerContacts = styled.div`
  margin-right: 100px;

  h3 {
    color: #861418;
    font-size: 17px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  p,
  a {
  }
`

export const Teste = styled.div`
  width: 90%;
  height: 400px;
  border: 3px solid #a8a9aa;
`
