import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  /* padding: 0 10px; */
`

export const Center = styled.div`
  width: auto;
  height: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  a {
    cursor: pointer;

    &:hover {
      opacity: 0.5;
      transition: 0.6s;
    }
  }
`

export const Logo = styled.img`
  width: 200px;
  height: auto;
  border-radius: 100%;
  box-shadow: 0px 3px 10px 2px #4444;
  margin-bottom: 20px;
`

export const Section = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid white;

  h2 {
    font-size: 12px;
    font-weight: 100;
    color: white;


  }

  span {
    margin: 0 20px;
    color: white;
  }
`
