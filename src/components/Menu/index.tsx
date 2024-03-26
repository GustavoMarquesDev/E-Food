import { useParams } from 'react-router-dom'

import CardCardapio from '../Cards_Dishes'
import Loader from '../Loader'

import { useGetRestaurantQuery } from '../../services/api'

import * as S from './styles'

type dishParams = {
  id: string
}

export const MenuPage = () => {
  const { id } = useParams() as dishParams
  const { data: restaurant } = useGetRestaurantQuery(id)

  if (restaurant) {
    return (
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
    )
  }

  return <Loader />
}

export default MenuPage
