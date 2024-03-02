import { useState } from 'react'

import { BoxImg, BtnAdicionar, Descricao, FoodCard, Title } from './styles'
import close from '../../assets/imgs/close.png'
import * as S from './styles'

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

const CardCardapio = ({ id, foto, nome, descricao, porcao, preco }: Props) => {
  const [modal, setModal] = useState(false)

  return (
    <FoodCard>
      <BoxImg>
        <img src={foto} alt={nome} />
      </BoxImg>
      <Title>{nome}</Title>
      <Descricao>{getDescricao(descricao)}</Descricao>
      <BtnAdicionar onClick={() => setModal(true)}>
        Adicionar ao carrinho
      </BtnAdicionar>
      <S.Modal className={modal ? 'visivel' : 'oculto'}>
        <S.ModalContent className="container">
          <S.ModalHeader>
            <img
              onClick={() => setModal(false)}
              src={close}
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
              <S.BtnAdicionarCarrinho>
                Adicionar ao carrinho {formataPreco(preco)}
              </S.BtnAdicionarCarrinho>
            </div>
          </S.ModalBox>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModal(false)}></div>
      </S.Modal>
    </FoodCard>
  )
}

export default CardCardapio
