import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { BtnAdicionar } from '../Cards_Pratos/styles'
import { Checkout } from '../Checkout'
import Lixeira from '../../assets/imgs/Lixeira.png'

import { parseToBrl } from '../../utils'
import { getTotalPrice } from '../../utils'

import * as S from './styled'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const [delivery, setDelivery] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      {delivery && items.length > 0 ? (
        <Checkout setDelivery={setDelivery} />
      ) : (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
          <S.Overlay onClick={closeCart} />
          <S.Aside>
            <ul>
              {items.map((item) => (
                <S.CartFood key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    <p>{parseToBrl(item.preco)} </p>
                  </div>
                  <span onClick={() => removeItem(item.id)}>
                    <img src={Lixeira} alt="Remover item" />
                  </span>
                </S.CartFood>
              ))}
            </ul>
            {items.length > 0 ? (
              <>
                <S.Prices>
                  <p>Valor total</p>
                  <span>{parseToBrl(getTotalPrice(items))}</span>
                </S.Prices>
                <BtnAdicionar onClick={() => setDelivery(true)}>
                  Continuar com a entrega
                </BtnAdicionar>
              </>
            ) : (
              <h3>Nenhum item adicionado</h3>
            )}
          </S.Aside>
        </S.CartContainer>
      )}
    </>
  )
}
