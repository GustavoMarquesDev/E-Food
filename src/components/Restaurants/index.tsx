import { capitalize } from '../../utils'

import Card_Restaurante from '../Cards_Restaurants'

import { MenuSection } from './styles'

export type Props = {
  restaurant: Restaurant[]
}

const MainContainer = ({ restaurant }: Props) => {
  return (
    <MenuSection>
      {restaurant.map((restaurante) => (
        <Card_Restaurante
          key={restaurante.id}
          description={restaurante.descricao}
          name={restaurante.titulo}
          nota={restaurante.avaliacao}
          image={restaurante.capa}
          destacado={restaurante.destacado}
          tipo={capitalize(restaurante.tipo)}
          id={restaurante.id}
        />
      ))}
    </MenuSection>
  )
}

export default MainContainer
