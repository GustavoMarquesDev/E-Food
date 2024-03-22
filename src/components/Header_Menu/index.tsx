import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { capitalize } from '../../utils'

import logo from '../../assets/imgs/logo.png'
import Capa from '../../assets/imgs/Home_Capa.png'

import * as S from './styles'

type Props = {
  cardapio: Restaurante
}

const Header_Cardapio = ({ cardapio }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <S.BannerDiv style={{ backgroundImage: `url(${Capa})` }}>
        <div className="container">
          <S.BannerDivIten>
            <S.BannerText to={'/'}>Restaurantes</S.BannerText>
            <S.BackHome
              to={'/'}
              title="Voltar a tela de seleção de restaurantes"
            >
              <img src={logo} alt="E-food" />
            </S.BackHome>
            <S.BannerCart>
              <span onClick={openCart}>
                {items.length} produto(s) no carrinho
              </span>
            </S.BannerCart>
          </S.BannerDivIten>
        </div>
      </S.BannerDiv>
      <S.HeroDiv style={{ backgroundImage: `url(${cardapio.capa})` }}>
        <div className="container">
          <S.HeroType>{capitalize(cardapio.tipo)}</S.HeroType>
          <S.HeroName>{cardapio.titulo}</S.HeroName>
        </div>
      </S.HeroDiv>
    </>
  )
}

export default Header_Cardapio
