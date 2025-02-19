import styled from 'styled-components'
import breakpoints from '../../../../styles/breakpoints'

interface AnimationProps {
  animate: boolean
}

export const Main = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  /* padding: 15px; */
  padding-top: 65px;

  @media screen and (max-width: 1030px) {
    padding-top: 150px;
    padding-bottom: 150px;
  }
`

export const Section = styled.div<AnimationProps>`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  opacity: ${({ animate }) => (animate ? '1' : '0')};
  transition: 1.5s ease;

  @media ${breakpoints.sm} {
   
  }
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
  font-size: 60px;

  @media ${breakpoints.md} {
    font-size: 35px;
  }

  @media ${breakpoints.sm} {
    letter-spacing: 15px;
    font-size: 20px;
  }
`

export const H2 = styled.h2`
  font-size: 50px;
  color: #861418;
  font-weight: 100;
  margin: 0;
  margin-top: -4%;
  margin-bottom: 80px;
  padding: 0;
  position: relative;
  letter-spacing: 5px;
  z-index: 2;
  text-transform: uppercase;
  position: absolute;

  @media screen and (max-width: 980px) {
    font-size: 35px;
    margin-top: -2%;
  }

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`

export const H3 = styled.h3`
  font-size: 25px;
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-top: 100px;

  @media screen and (max-width: 700px) {
    font-size: 17px;
    margin-top: 50px;
  }

  @media screen and (max-width: 510px) {
    font-size: 12px;
  }
`

export const P = styled.p`
  font-size: 20px;
  color: white;
  margin: 23px 0;
  padding: 0;

  @media screen and (max-width: 700px) {
    font-size: 15px;
  }

  @media screen and (max-width: 510px) {
    font-size: 12px;
  }
`

export const ImageWithIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  padding-top: 100px;

  img {
    width: 130px;
    height: 130px;
    margin-right: 50px;
    border-radius: 50%;
  }
`
