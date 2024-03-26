import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { capitalize } from '../../utils'

import logo from '../../assets/imgs/logo.png'
import Capa from '../../assets/imgs/Home_Capa.png'
import cart from '../../assets/imgs/png-transparent-shopping-cart-computer-icons-shopping-symbols-text-hand-logo.png'

import * as S from './styles'

type Props = {
  cardapio?: Restaurante
  type: 'restaurants' | 'menu'
}

const Hero = ({ cardapio, type }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  if (type === 'restaurants') {
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
                  {itens.length} produto(s) no carrinho
                </span>
              </S.BannerCart>
              <S.Cesta onClick={openCart}>
                <img src={cart} alt="" />
              </S.Cesta>
            </S.BannerDivIten>
          </div>
        </S.BannerDiv>
        {cardapio && (
          <S.HeroDiv style={{ backgroundImage: `url(${cardapio.capa})` }}>
            <div className="container">
              <S.HeroType>{capitalize(cardapio.tipo)}</S.HeroType>
              <S.HeroName>{cardapio.titulo}</S.HeroName>
            </div>
          </S.HeroDiv>
        )}
      </>
    )
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${Capa})` }}>
      <S.HeaderContainer>
        <img src={logo} alt="E-food" />
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </S.HeaderContainer>
    </S.Banner>
  )
}

export default Hero
