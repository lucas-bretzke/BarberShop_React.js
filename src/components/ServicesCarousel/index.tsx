// No arquivo ServicesScroll.tsx
import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CustomSlider, ItemContainer, Section } from './styles'

interface ItemProps {
  image: string
  description: string
}

interface ServicesScrollProps {
  items: ItemProps[]
  dots?: boolean
  style?: React.CSSProperties
  descriptionVisibility?: boolean
}

export default function ServicesCarousel({
  items,
  style,
  dots = false,
  descriptionVisibility = false
}: ServicesScrollProps) {
  function Item({ image, description }: ItemProps) {
    return (
      <ItemContainer>
        <img src={image} alt={description} />
        {descriptionVisibility && <p>{description}</p>}
      </ItemContainer>
    )
  }

  const settings = {
    dots: dots,
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
    <Section style={style}>
      <CustomSlider {...settings}>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </CustomSlider>
    </Section>
  )
}
