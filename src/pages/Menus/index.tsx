import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../services/api'

import Hero from '../../components/Hero'
import MenuPage from '../../components/Menu'

type dishParams = {
  id: string
}

const Menus = () => {
  const { id } = useParams() as dishParams
  const { data: restaurant } = useGetRestaurantQuery(id)

  return (
    <>
      <Hero type="restaurants" cardapio={restaurant} />
      <MenuPage />
    </>
  )
}

export default Menus
