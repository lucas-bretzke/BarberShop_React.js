import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eaebeb;
  border-top: 2px solid red;
  border-bottom: 2px solid red;
  padding-top: 65px;
`

export const Center = styled.div`
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
  z-index: 2;
  margin: 0;
  margin-top: -55px;
  margin-bottom: 80px;
  padding: 0;
  letter-spacing: 5px;

  text-transform: uppercase;
`

export const ItemContainer = styled.div`
  position: relative;
  text-align: center;
  width: calc(33.33% - 20px);
  margin-bottom: 60px;
  box-sizing: border-box;

  img {
    width: 100%;
    max-width: 380px;
    height: auto;
    position: relative; /* Adicionado para permitir z-index */
    z-index: 1;
    border: 15px solid #eaebeb;

    &:hover {
      cursor: pointer;
      transition: 1s;
      border: 15px solid #ba1b1f;
    }
  }

  p {
    position: absolute;
    bottom: -7%;
    left: -4%;

    margin: 0;
    padding: 15px 20px;
    height: auto;
    max-width: 50%;
    color: black;
    font-size: 16px;
    font-weight: bold;
    background-color: white;
    z-index: 2;
  }
`
