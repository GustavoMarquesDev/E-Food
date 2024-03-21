import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { close, remove } from '../../store/reducers/cart'

import { BtnAdicionar } from '../Cards_Pratos/styles'
import { Aside, CartContainer, CartFood, Overlay, Prices } from './styled'
import Lixeira from '../../assets/imgs/Lixeira.png'
import { RootReducer } from '../../store'
import { formataPreco } from '../Cards_Pratos'

import { Checkout } from '../Checkout'
import { getTotalPrice } from '../../utils'

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
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCart} />
          <Aside>
            <ul>
              {items.map((item) => (
                <CartFood key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    <p>{formataPreco(item.preco)} </p>
                  </div>
                  <span onClick={() => removeItem(item.id)}>
                    <img src={Lixeira} alt="Remover item" />
                  </span>
                </CartFood>
              ))}
            </ul>
            {items.length > 0 ? (
              <>
                <Prices>
                  <p>Valor total</p>
                  <span>{formataPreco(getTotalPrice(items))}</span>
                </Prices>
                <BtnAdicionar onClick={() => setDelivery(true)}>
                  Continuar com a entrega
                </BtnAdicionar>
              </>
            ) : (
              <h3>Nenhum item adicionado</h3>
            )}
          </Aside>
        </CartContainer>
      )}
    </>
  )
}
