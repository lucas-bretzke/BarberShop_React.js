import Slider from 'react-slick'
import styled from 'styled-components'

export const ItemContainer = styled.div`
  text-align: center;
  max-width: 320px;
  height: 280px;
  background-color: white;
  border-radius: 5px;
  border: 2px solid #444444;

  img {
    width: 320px;
    height: auto;
    max-width: 100%;
    border-radius: 3px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  p {
    collor: white;
    font-size: 18px;
    font-weight: bold;
  }
`

export const CustomSlider = styled(Slider)`
  position: absolute;
  left: 50%;
  top: 99%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  padding-bottom: 15px;
  z-index: 2;

  @media (max-width: 768px) {
    left: 0;
    transform: none;
    margin: auto;
    width: 100%;
  }
`
