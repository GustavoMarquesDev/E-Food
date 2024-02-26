import logo from '../../assets/imgs/logo.png'
import Capa from '../../assets/imgs/Home_Capa.png'
import * as S from './styles'
import macarraoCapa from '../../assets/imgs/Macarrao_Capa.png'

const Header_Perfil = () => (
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
    <S.HeroDiv style={{ backgroundImage: `url(${macarraoCapa})` }}>
      <div className="container">
        <S.HeroTipo>Italiana</S.HeroTipo>
        <S.HeroName>La Dolce Vita Trattoria</S.HeroName>
      </div>
    </S.HeroDiv>
  </>
)

export default Header_Perfil
