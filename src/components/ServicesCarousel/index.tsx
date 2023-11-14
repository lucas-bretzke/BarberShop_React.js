// No arquivo ServicesScroll.tsx
import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CustomSlider, ItemContainer } from './styles'

interface ItemProps {
  image: string
  description: string
}

interface ServicesScrollProps {
  items: ItemProps[]
}

export default function ServicesCarousel({ items }: ServicesScrollProps) {
  function Item({ image, description }: ItemProps) {
    return (
      <ItemContainer>
        <img src={image} alt={description} />
        <p>{description}</p>
      </ItemContainer>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <></>,
    nextArrow: <></>
  }

  return (
    <CustomSlider {...settings}>
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </CustomSlider>
  )
}
