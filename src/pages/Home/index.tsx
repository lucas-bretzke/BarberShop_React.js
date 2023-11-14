/**
 * Images.
 */
import Sobrancelha from '../../assets/fazendo-sobrancelha.jpeg'
import LpezaDePele from '../../assets/limpeza-de-pele.jpg'
import FazendoABarba from '../../assets/fazendo-a-barba.jpg'
import CorteDeCabelo from '../../assets/corte-de-cabelo.jpg'
import VendaDeProdutos from '../../assets/produtos-masculinos.jpg'

/**
 * Components
 */
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ServicesScroll from '../../components/ServicesCarousel'

/**
 *  Component.
 */
export default function Home() {
  const items = [
    { image: CorteDeCabelo, description: 'Corte de Cabelo' },
    { image: LpezaDePele, description: 'Limpeza de Pele' },
    { image: FazendoABarba, description: 'Barba' },
    { image: Sobrancelha, description: 'Sobrancelha' },
    { image: VendaDeProdutos, description: 'Produtos de Estética Masculina' }
  ]

  return (
    <div>
      <Header />
      <Banner />
      <ServicesScroll items={items} />
    </div>
  )
}
