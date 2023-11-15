import styled from 'styled-components'

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
export const Section = styled.section`
  display: flex;
`
export const ContainerText = styled.div`
  padding-right: 20%;
  height: 100%;
`

export const H1 = styled.h1`
  font-size: 100px;
  color: white;
  font-weight: 100;
  margin: 0;
  padding: 0;
  position: absolute;
  margin-left: -50px;
  margin-top: -40px;
  letter-spacing: 20px;
  text-transform: uppercase;
  z-index: 1;
`

export const H2 = styled.h2`
  font-size: 50px;
  color: #861418;
  font-weight: 100;
  margin-top: 12%;
  text-transform: uppercase;
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

export const Button = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  font-size: 15px;
  padding: 20px;
  margin-top: 20px;
  text-transform: uppercase;
  background-color: #861418;
  letter-spacing: 2px;

  &:hover {
    transition: 1s;
    background-color: #ba1b1f;
  }
`
