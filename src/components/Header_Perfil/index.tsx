import logo from '../../assets/imgs/logo.png'
import Capa from '../../assets/imgs/Home_Capa.png'
import {
  BannerDiv,
  BannerDivItem,
  BannerText,
  HeroDiv,
  HeroName,
  HeroTipo
} from './styles'
import macarraoCapa from '../../assets/imgs/Macarrao_Capa.png'

const Header_Perfil = () => (
  <>
    <BannerDiv style={{ backgroundImage: `url(${Capa})` }}>
      <div className="container">
        <BannerDivItem>
          <BannerText>Restaurantes</BannerText>
          <img src={logo} alt="E-food" />
          <BannerText>
            <span>0 produto(s) no carrinho</span>
          </BannerText>
        </BannerDivItem>
      </div>
    </BannerDiv>
    <HeroDiv style={{ backgroundImage: `url(${macarraoCapa})` }}>
      <div className="container">
        <HeroTipo>Italiana</HeroTipo>
        <HeroName>La Dolce Vita Trattoria</HeroName>
      </div>
    </HeroDiv>
  </>
)

export default Header_Perfil
