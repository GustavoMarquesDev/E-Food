import { useParams } from 'react-router-dom'
import * as S from './styles'
import Header_Cardapio from '../Header_Cardapio'
import CardCardapio from '../Cards_Pratos'
import { useGetRestaurantQuery } from '../../services/api'
import Loader from '../../Loader'

type PratoParams = {
  id: string
}

export const CardapioContainer = () => {
  const { id } = useParams() as PratoParams
  const { data: restaurant } = useGetRestaurantQuery(id)

  if (restaurant) {
    return (
      <>
        <Header_Cardapio cardapio={restaurant} />
        <div className="container">
          <S.MenuSection>
            {restaurant.cardapio.map((prato) => (
              <li key={prato.id}>
                <CardCardapio
                  porcao={prato.porcao}
                  preco={prato.preco}
                  descricao={prato.descricao}
                  nome={prato.nome}
                  foto={prato.foto}
                  id={prato.id}
                />
              </li>
            ))}
          </S.MenuSection>
        </div>
      </>
    )
  }

  return <Loader />
}

export default CardapioContainer
