import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`

export const Section = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
  margin: 0;
  margin-top: -50px;
  margin-bottom: 80px;
  padding: 0;
  letter-spacing: 5px;
  z-index: 2;
  text-transform: uppercase;
  position: absolute;
`

export const H3 = styled.h3`
  font-size: 25px;
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-top: 100px;
`

export const P = styled.p`
  font-size: 20px;
  color: white;
  margin: 23px 0;
  padding: 0;
`

export const ImageWithIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  img {
    width: 130px;
    height: 130px;
    margin-right: 50px;
    border-radius: 50%;
  }
`
