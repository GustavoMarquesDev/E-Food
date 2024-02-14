import { Banner, HeaderContainer, Title } from './styles'
import logo from '../../assets/imgs/logo.png'
import Capa from '../../assets/imgs/Home_Capa.png'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${Capa})` }}>
    <HeaderContainer>
      <img src={logo} alt="E-food" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HeaderContainer>
  </Banner>
)

export default Hero
