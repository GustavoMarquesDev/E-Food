import Card_Restaurante from '../Cards_Restaurante'
import { MenuSection } from './styles'
import { useEffect, useState } from 'react'
import { Restaurante } from '../../pages/Home'

export const capitalize = (termo: string) => {
  return termo.charAt(0).toUpperCase() + termo.slice(1)
}

const MainContainer = () => {
  const [restaurante, setRestaurante] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        return setRestaurante(res)
      })
  }, [])

  return (
    <MenuSection>
      {restaurante.map((restaurante) => (
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
