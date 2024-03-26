import { useDispatch } from 'react-redux'
import { useState } from 'react'

import closeIcon from '../../assets/imgs/close.png'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import * as S from './styles'

type Props = {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

export const getDescricao = (descricao: string) => {
  if (descricao.length > 95) {
    return descricao.slice(0, 160) + '...'
  }

  return descricao
}

const CardMenu = ({ id, foto, nome, descricao, porcao, preco }: Props) => {
  const [modal, setModal] = useState(false)

  const dispatch = useDispatch()

  const prato = {
    foto,
    nome,
    descricao,
    porcao,
    preco,
    id
  }

  const addCart = () => {
    dispatch(open())
    dispatch(add(prato))
    setModal(false)
  }

  return (
    <S.FoodCard>
      <S.BoxImg>
        <img src={foto} alt={nome} />
      </S.BoxImg>
      <S.Title>{nome}</S.Title>
      <S.Description>{getDescricao(descricao)}</S.Description>
      <S.BtnAdd onClick={() => setModal(true)}>Mais detalhes</S.BtnAdd>
      <S.Modal className={modal ? 'visivel' : 'oculto'}>
        <S.ModalContent className="container">
          <S.ModalHeader>
            <img
              onClick={() => setModal(false)}
              src={closeIcon}
              alt="Clique aqui para fechar"
            />
          </S.ModalHeader>
          <S.ModalBox>
            <div>
              <img src={foto} alt="pizza" />
            </div>
            <div>
              <h2>{nome}</h2>
              <p>
                {descricao} <br />
                <br />
                Serve {porcao}
              </p>
              <S.BtnAddToCart onClick={addCart}>
                Adicionar ao carrinho {parseToBrl(preco)}
              </S.BtnAddToCart>
            </div>
          </S.ModalBox>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModal(false)}></div>
      </S.Modal>
    </S.FoodCard>
  )
}

export default CardMenu
