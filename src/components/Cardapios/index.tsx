import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { Restaurante } from '../../pages/Home'
import Header_Cardapio from '../Header_Cardapio'
import CardCardapio from '../Cards_Pratos'

export const CardapioContainer = () => {
  const { id } = useParams()

  const [cardapio, setCardapio] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        return setCardapio(res)
      })
  }, [id])

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header_Cardapio cardapio={cardapio} />
      <div className="container">
        <S.MenuSection>
          {cardapio.cardapio.map((item) => (
            <li key={item.id}>
              <CardCardapio
                porcao={item.porcao}
                preco={item.preco}
                descricao={item.descricao}
                nome={item.nome}
                foto={item.foto}
                id={item.id}
              />
            </li>
          ))}
        </S.MenuSection>
      </div>
    </>
  )
}

export default CardapioContainer
