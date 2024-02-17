import logo from '../../assets/imgs/logo.png'
import { FooterContainer, FooterDescription, Links, Logo } from './styles'
import instagram from '../../assets/imgs/Instagram.png'
import facebook from '../../assets/imgs/Facebook.png'
import twiter from '../../assets/imgs/Twiter.png'

const Footer = () => (
  <FooterContainer>
    <Logo>
      <img src={logo} alt="E-food" />
    </Logo>
    <Links>
      <li>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twiter} alt="twiter" />
        </a>
      </li>
    </Links>
    <FooterDescription>
      A efood é uma plataforma para FooterContainerulgação de estabelecimentos,
      a responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </FooterDescription>
  </FooterContainer>
)

export default Footer
