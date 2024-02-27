import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Card from '../../components/Cards_Perfil'
import Header_Perfil from '../../components/Header_Perfil'
import * as S from './styles'
import Modal from '../../components/Modal'
import { Restaurante } from '../../pages/Home'

export const PerfilContainer = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 160) + '...'
    }

    return descricao
  }

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        return setRestaurante(res)
      })
  }, [id])

  return (
    <>
      <Header_Perfil />
      <div className="container">
        <S.MenuSection>
          {restaurante
            ? restaurante.cardapio.map((item) => (
                <Card
                  key={item.id}
                  description={getDescricao(item.descricao)}
                  name={item.nome}
                  image={item.foto}
                  id={item.id}
                />
              ))
            : null}
        </S.MenuSection>
        <Modal />
      </div>
    </>
  )
}

export default PerfilContainer
