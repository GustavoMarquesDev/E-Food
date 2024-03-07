import { useDispatch } from 'react-redux'
import { useState } from 'react'

import closeIcon from '../../assets/imgs/close.png'
import * as S from './styles'
import { add, open } from '../../store/reducers/cart'

type Props = {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getDescricao = (descricao: string) => {
  if (descricao.length > 95) {
    return descricao.slice(0, 160) + '...'
  }

  return descricao
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CardCardapio = ({ id, foto, nome, descricao, porcao, preco }: Props) => {
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
      <S.Descricao>{getDescricao(descricao)}</S.Descricao>
      <S.BtnAdicionar onClick={() => setModal(true)}>
        Mais detalhes
      </S.BtnAdicionar>
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
              <S.BtnAdicionarCarrinho onClick={addCart}>
                Adicionar ao carrinho {formataPreco(preco)}
              </S.BtnAdicionarCarrinho>
            </div>
          </S.ModalBox>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModal(false)}></div>
      </S.Modal>
    </S.FoodCard>
  )
}

export default CardCardapio
