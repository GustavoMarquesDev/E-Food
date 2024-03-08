import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'

import logo from '../../assets/imgs/logo.png'
import Capa from '../../assets/imgs/Home_Capa.png'
import * as S from './styles'

import { Restaurante } from '../../pages/Restaurantes'
import { capitalize } from '../Restaurantes'
import { RootReducer } from '../../store'

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
          <S.BannerDivItem>
            <S.BannerText to={'/'}>Restaurantes</S.BannerText>
            <S.VoltarHome
              to={'/'}
              title="Voltar a tela de seleção de restaurantes"
            >
              <img src={logo} alt="E-food" />
            </S.VoltarHome>
            <S.BannerCart>
              <span onClick={openCart}>
                {items.length} produto(s) no carrinho
              </span>
            </S.BannerCart>
          </S.BannerDivItem>
        </div>
      </S.BannerDiv>
      <S.HeroDiv style={{ backgroundImage: `url(${cardapio.capa})` }}>
        <div className="container">
          <S.HeroTipo>{capitalize(cardapio.tipo)}</S.HeroTipo>
          <S.HeroName>{cardapio.titulo}</S.HeroName>
        </div>
      </S.HeroDiv>
    </>
  )
}

export default Header_Cardapio
