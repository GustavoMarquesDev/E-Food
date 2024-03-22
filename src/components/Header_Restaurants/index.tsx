import * as S from './styles'
import logo from '../../assets/imgs/logo.png'
import Capa from '../../assets/imgs/Home_Capa.png'

const Hero = () => (
  <S.Banner style={{ backgroundImage: `url(${Capa})` }}>
    <S.HeaderContainer>
      <img src={logo} alt="E-food" />
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </S.HeaderContainer>
  </S.Banner>
)

export default Hero
