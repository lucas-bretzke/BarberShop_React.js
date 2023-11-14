import React from 'react'
import Header from '../../components/Header'
import { Center } from './styles'
import Banner from '../../components/Banner'
import ServicesScroll from '../../components/ServicosCarousel'

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <ServicesScroll />
    </div>
  )
}
