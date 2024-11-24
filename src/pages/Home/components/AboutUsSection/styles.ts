import styled from 'styled-components'
import breakpoints from '../../../../styles/breakpoints'

interface AnimationProps {
  animate: boolean
}

export const Main = styled.div`
  padding-top: 250px;
  padding-bottom: 150px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: black;
  overflow: hidden;
`

export const Center = styled.div<AnimationProps>`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1200px;

  opacity: ${({ animate }) => (animate ? '1' : '0')};
  transition: 1s ease;

  @media ${breakpoints.bg} {
    height: auto;
    flex-direction: column;
  }
`

export const Section = styled.section<AnimationProps>`
  display: flex;
  opacity: ${({ animate }) => (animate ? '1' : '0')};
  transition: 1s ease;

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`

export const ContainerText = styled.div`
  margin-right: 20%;
  height: auto;
  padding: 15px;

  @media screen and (max-width: 1210px) {
    margin-right: 0%;
  }
`

export const H1 = styled.h1`
  color: white;
  font-weight: 100;
  margin: 0;
  padding: 0;
  position: absolute;
  margin-left: -1%;
  margin-top: -40px;
  letter-spacing: 20px;
  text-transform: uppercase;
  z-index: 1;
  font-size: 60px;

  @media ${breakpoints.sm} {
    font-size: 28px;
  }
`

export const H2 = styled.h2`
  font-size: 50px;
  color: #861418;
  font-weight: 100;
  margin: 0;
  margin-top: 10%;
  text-transform: uppercase;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1210px) {
    font-size: 40px;
    margin-top: 5%;
  }

  @media ${breakpoints.bg} {
    font-size: 25px;
  }
`

export const H3 = styled.h3`
  color: #861418;
`

export const P = styled.p`
  color: white;
  font-size: 17px;
  line-height: 1.5;

  @media ${breakpoints.bg} {
    font-size: 15px;
  }
`

export const Line = styled.span`
  border: 1px solid white;
  height: 210px;
  position: absolute;

  @media screen and (max-width: 1030px) {
    height: 170px;
  }
`

export const Image = styled.img`
  width: 42%;
  height: 550px;
  border: 5px solid #861418;

  @media ${breakpoints.sm} {
    width: 800px;
    height: auto;
  }

  @media ${breakpoints.bg} {
    margin-top: 40px;
    width: 50%;
    height: 50%;
    max-height: 400px;
  }
`
