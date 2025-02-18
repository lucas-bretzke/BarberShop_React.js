import styled from 'styled-components'
import breakpoints from '../../../../styles/breakpoints'

interface AnimationProps {
  animate: boolean
}

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 75px;
  justify-content: center;
  background-color: #eaebeb;

  @media ${breakpoints.md} {
    height: auto;
  }
`

export const Center = styled.div<AnimationProps>`
  width: 100vw;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 3.5%;
  padding-top: 70px;
  opacity: ${({ animate }) => (animate ? '1' : '0')});
  transition: 1.5s ease;

`

export const H1 = styled.h1`
  position: relative;
  font-size: 100px;
  color: #a8a9aa;
  font-weight: 100;
  margin: 0;
  letter-spacing: 35px;
  text-transform: uppercase;

  @media ${breakpoints.bg} {
    font-size: 70px;
  }
  @media ${breakpoints.md} {
    font-size: 40px;
    letter-spacing: 20px;
    padding: 0;
  }

  @media ${breakpoints.sm} {
    font-size: 30px;
  }
`

export const H2 = styled.h2`
  font-size: 50px;
  color: #861418;
  font-weight: 100;
  z-index: 2;
  margin: 0;
  padding: 0px 25px;
  letter-spacing: 5px;
  text-transform: uppercase;

  @media ${breakpoints.bg} {
    font-size: 40px;
  }

  @media ${breakpoints.md} {
    font-size: 25px;
    padding: 0;
  }
`
export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  width: 80vw;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;

  @media ${breakpoints.md} {
    padding: 5px;
    flex-direction: column;
    justify-content: center;
  }
`

export const ContainerContacts = styled.div`
  width: auto;
  max-width: 45%;

  h3 {
    color: #861418;
    font-size: 15.5px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  @media ${breakpoints.md} {
    margin-right: 0;
    max-width: 100%;
  }
`

export const MapContainer = styled.div`
  width: 90%;
  max-width: 45%;
  height: 100%;
  max-height: 400px;
  border: 3px solid #a8a9aa;

  @media ${breakpoints.md} {
    height: 300px;
    margin-top: 30px;
    max-width: 100%;
  }
`
