import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { Restaurante } from '../../pages/Restaurantes'
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
          {cardapio.cardapio.map((prato) => (
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

export default CardapioContainer
