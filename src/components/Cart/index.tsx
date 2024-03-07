import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'

import { BtnAdicionar } from '../Cards_Pratos/styles'
import { Aside, CartContainer, CartFood, Overlay, Prices } from './styled'
import Lixeira from '../../assets/imgs/Lixeira.png'
import { RootReducer } from '../../store'
import { formataPreco } from '../Cards_Pratos'
import { Cardapio } from '../../pages/Restaurantes'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = (items: Cardapio[]) => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual.preco) {
        return (acumulador += valorAtual.preco)
      }
      return 0
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Aside>
        <ul>
          {items.map((item) => (
            <CartFood key={item.id}>
              <img src={item.foto} alt="" />
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
            <BtnAdicionar>Continuar com a entrega</BtnAdicionar>
          </>
        ) : (
          <h3>Nenhum item adicionado</h3>
        )}
      </Aside>
    </CartContainer>
  )
}
