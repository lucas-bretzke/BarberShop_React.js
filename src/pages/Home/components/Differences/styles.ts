import styled from 'styled-components'

interface AnimationProps {
  animate: boolean
}

export const Main = styled.div`
  padding-top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
  overflow: hidden;
`
export const Center = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
`

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerText = styled.div<AnimationProps>`
  height: 100%;
  max-width: 450px;

  opacity: ${({ animate }) => (animate ? '1' : '0')};
  transform: translateX(${({ animate }) => (animate ? '0' : '100vw')});
  transition: transform 1.1s ease;
`

export const H1 = styled.h1`
  font-size: 50px;
  color: white;
  font-weight: 100;
  margin: 0;
  padding: 0;
  margin-left: -50px;
  margin-top: -25px;
  letter-spacing: 20px;
  text-transform: uppercase;
  z-index: 1;
`

export const H2 = styled.h2`
  font-size: 30px;
  color: white;
  font-weight: 100;
  z-index: 2;

  span {
    color: #861418;
  }
`

export const P = styled.p`
  color: white;
  font-size: 17px;
  line-height: 1.5;

  span {
    color: #861418;
  }
`

export const Image = styled.img`
  width: 500px;
  height: 100%;
  border: 5px solid #861418;
  margin: auto 0;
`
