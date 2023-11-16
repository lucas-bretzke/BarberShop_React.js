/**
 * Images.
 */
import Sobrancelha from '../../../../assets/fazendo-sobrancelha.jpeg'
import LpezaDePele from '../../../../assets/limpeza-de-pele.jpg'
import FazendoABarba from '../../../../assets/corte-barba.jpg'
import CorteDeCabelo from '../../../../assets/corte-de-cabelo.jpg'
import VendaDeProdutos from '../../../../assets/produtos-masculinos.jpg'
import { Center, H1, H2, ItemContainer, Main } from './styles'

/**
 * Types.
 */
interface ItemProps {
  image: string
  description: string
}

/**
 *  Component.
 */
export default function ServicesProvided() {
  const items = [
    { image: CorteDeCabelo, description: 'Corte de Cabelo' },
    { image: FazendoABarba, description: 'Barba' },
    { image: Sobrancelha, description: 'Sobrancelha' },
    { image: LpezaDePele, description: 'Limpeza de Pele' },
    { image: VendaDeProdutos, description: 'Produtos de Estética Masculina' }
  ]

  function Item({ image, description }: ItemProps) {
    return (
      <ItemContainer>
        <img src={image} alt={description} />
        <p>{description}</p>
      </ItemContainer>
    )
  }

  return (
    <Main>
      <H1>Estética</H1>
      <H2>Serviços</H2>
      <Center>{items.map(item => Item(item))}</Center>
    </Main>
  )
}
