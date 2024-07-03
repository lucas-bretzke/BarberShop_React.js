import styled from 'styled-components'

interface AnimationProps {
  animate: boolean
}

export const Main = styled.div`
  padding: 150px 0;
  width: 100%;
  height: auto;
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
  justify-content: space-around;
  max-width: 1200px;

  @media screen and (max-width: 980px) {
    height: auto;
    flex-direction: column;
  }
`

export const ContainerText = styled.div<AnimationProps>`
  height: 100%;
  width: 450px;
  opacity: ${({ animate }) => (animate ? '1' : '0')};
  transform: translateX(${({ animate }) => (animate ? '0' : '100vw')});
  transition: transform 1.1s ease;

  @media screen and (max-width: 980px) {
    width: 70%;
    margin-top: 100px;
    align-items: center;
    justify-content: center;
  }
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

  @media screen and (max-width: 980px) {
    font-size: 40px;
    margin-left: -20px;
  }

  @media screen and (max-width: 510px) {
    font-size: 20px;
  }
`

export const H2 = styled.h2`
  font-size: 30px;
  color: white;
  font-weight: 100;
  z-index: 2;

  span {
    color: #861418;
  }

  @media screen and (max-width: 980px) {
    font-size: 27px;
  }

  @media screen and (max-width: 510px) {
    font-size: 20px;
  }
`

export const P = styled.p`
  color: white;
  font-size: 17px;
  line-height: 1.5;

  span {
    color: #861418;
  }

  @media screen and (max-width: 980px) {
    font-size: 15px;
  }

  @media screen and (max-width: 510px) {
    font-size: 12px;
  }
`

export const Image = styled.img`
  width: 500px;
  height: 60%;
  border: 5px solid #861418;
  margin: auto 0;

  @media screen and (max-width: 980px) {
    width: 450px;
  }
`
