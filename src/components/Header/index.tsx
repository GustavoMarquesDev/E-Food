import { BoxImg, Banner, HeaderContainer, Title } from './styles'
import logo from '../../assets/imgs/logo.png'
import Capa from '../../assets/imgs/Home_Capa.png'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${Capa})` }}>
    <HeaderContainer>
      <BoxImg>
        <img src={logo} alt="E-food" />
      </BoxImg>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HeaderContainer>
  </Banner>
)

export default Hero
