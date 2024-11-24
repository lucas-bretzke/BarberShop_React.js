/**
 * Components
 */
import Header from '../../components/NavBar'
import Banner from '../../components/Banner'
import ServicesScroll from '../../components/ServicesCarousel'
import AboutUsSection from './components/AboutUsSection'
import Differences from './components/Differences'
import ServicesProvided from './components/ServicesProvided'
import Contacts from './components/Contact'
import FollowUsOnInstagram from './components/FollowUsOnInstagram'
import Footer from './components/Footer'


/**
 * Images.
 */
import Sobrancelha from '../../assets/fazendo-sobrancelha.jpeg'
import LpezaDePele from '../../assets/limpeza-de-pele.jpg'
import FazendoABarba from '../../assets/fazendo-a-barba.jpg'
import CorteDeCabelo from '../../assets/corte-de-cabelo.jpg'
import VendaDeProdutos from '../../assets/produtos-masculinos.jpg'


/**
 *  Component.
 */
export default function Home() {
  const items = [
    { image: CorteDeCabelo, description: 'Corte de Cabelo' },
    { image: LpezaDePele, description: 'Limpeza de Pele' },
    { image: FazendoABarba, description: 'Barba' },
    { image: Sobrancelha, description: 'Sobrancelha' },
    { image: VendaDeProdutos, description: 'Produtos de Estética' }
  ]

  return (
    <div>
      <Header />
      <Banner />
      <ServicesScroll
        dots
        items={items}
        descriptionVisibility
        style={{ position: 'absolute', top: 'calc(100vh - 10px)' }}
      />
      <AboutUsSection />
      <Differences />
      <ServicesProvided />
      <FollowUsOnInstagram />
      <ServicesScroll
        items={items}
        style={{ backgroundColor: 'black', paddingBottom: '25px' }}
      />
      <Contacts />
      <Footer />
    </div>
  )
}
