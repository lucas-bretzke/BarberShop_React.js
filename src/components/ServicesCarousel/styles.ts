import Slider from 'react-slick'
import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  padding: 0;
  margin: 0;
`

export const ItemContainer = styled.div`
  max-width: 320px;
  height: auto;
  background-color: white;
  border-radius: 5px;
  border: 2px solid #444444;
  text-align: center;
  margin: 0 3%;

  img {
    width: 100%;
    max-width: 320px;
    height: auto;
    border-radius: 3px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 18px;
    font-weight: bold;
  }
`

export const CustomSlider = styled(Slider)`
  left: 50%;
  top: 99%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  padding-bottom: 15px;
  z-index: 2;

  /* Estilo dos dots */
  .slick-dots {
    list-style: none;
    display: flex !important;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .slick-dots li {
    margin: 0 4px; /* Ajuste o espaçamento entre os dots conforme necessário */
  }

  .slick-dots li button {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #444; /* Cor dos dots não ativos */
    border: 1px solid #fff; /* Borda dos dots não ativos */
    outline: none;
    transition: all 0.3s;
  }

  .slick-dots li.slick-active button {
    background-color: #fff; /* Cor do dot ativo */
    border-color: #444; /* Borda do dot ativo */
  }

  @media (max-width: 1025px) {
    max-width: 900px;
  }
`
