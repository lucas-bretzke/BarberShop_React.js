import styled from 'styled-components'

interface AnimationProps {
  animate: boolean
}

export const Main = styled.div`
  padding-top: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
`

export const Center = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
`

export const Section = styled.section<AnimationProps>`
  display: flex;
  opacity: ${({ animate }) => (animate ? '1' : '0')};
  transition: 1s ease;
`

export const ContainerText = styled.div`
  margin-right: 20%;
  height: 100%;
`

export const H1 = styled.h1`
  font-size: 100px;
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
`

export const H2 = styled.h2`
  font-size: 50px;
  color: #861418;
  font-weight: 100;
  margin-top: 10%;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
`

export const H3 = styled.h3`
  color: #861418;
`

export const P = styled.p`
  color: white;
  font-size: 17px;
  line-height: 1.5;
`

export const Line = styled.span`
  border: 1px solid white;
  width: 0px;
  height: 210px;
  position: absolute;
  display: flex-start;
`

export const Image = styled.img`
  height: 600px;
  max-height: 600px;
  max-width: 500px;
  border: 5px solid #861418;
`
// opacity: ${({ animate }) => (animate ? '1' : '0')};
// transform: translateX(${({ animate }) => (animate ? '0' : '100vw')});
// transition: transform 1.1s ease;
