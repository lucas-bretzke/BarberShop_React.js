import styled from 'styled-components'

interface AnimationProps {
  animate: boolean
}

export const Main = styled.main`
  width: 100%;
  height: calc(100vh);
  display: flex;
  /* padding-bottom: 20px; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eaebeb;

  @media screen and (max-width: 700px) {
    height: auto;
  }
`

export const Center = styled.div<AnimationProps>`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3.5%;
  padding-top: 70px;

  opacity: ${({ animate }) => (animate ? '1' : '0')};
  transition: 1.5s ease;
`
export const H1 = styled.h1`
  position: relative;
  font-size: 100px;
  color: #a8a9aa;
  font-weight: 100;
  margin: 0;
  padding: 0px 25px;
  padding-top: 30px;
  letter-spacing: 35px;
  text-transform: uppercase;

  @media screen and (max-width: 1030px) {
    font-size: 70px;
  }
  @media screen and (max-width: 610px) {
    font-size: 40px;
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

  @media screen and (max-width: 1030px) {
    font-size: 40px;
  }

  @media screen and (max-width: 610px) {
    font-size: 20px;
  }
`
export const Section = styled.section`
  display: flex;
  padding: 3.5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const ContainerContacts = styled.div`
  margin-right: 100px;

  h3 {
    color: #861418;
    font-size: 17px;
    letter-spacing: 3px;
    text-transform: uppercase;

    @media screen and (max-width: 610px) {
      font-size: 14px;
    }
  }
`

export const MapContainer = styled.div`
  width: 90%;
  height: 400px;
  border: 3px solid #a8a9aa;

  @media screen and (max-width: 1030px) {
    width: 80%;
    height: 300px;
  }

  @media screen and (max-width: 700px) {
    margin-top: 30px;
  }
`
