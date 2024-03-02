import logo from '../../assets/imgs/logo.png'
import Capa from '../../assets/imgs/Home_Capa.png'
import * as S from './styles'

import { Restaurante } from '../../pages/Home'
import { capitalize } from '../Restaurantes'

type Props = {
  cardapio: Restaurante
}

const Header_Cardapio = ({ cardapio }: Props) => (
  <>
    <S.BannerDiv style={{ backgroundImage: `url(${Capa})` }}>
      <div className="container">
        <S.BannerDivItem>
          <S.BannerText>Restaurantes</S.BannerText>
          <S.VoltarHome
            to={'/'}
            title="Voltar a tela de seleção de restaurantes"
          >
            <img src={logo} alt="E-food" />
          </S.VoltarHome>
          <S.BannerText>
            <span>0 produto(s) no carrinho</span>
          </S.BannerText>
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

export default Header_Cardapio
