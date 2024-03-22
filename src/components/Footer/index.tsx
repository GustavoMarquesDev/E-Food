import logo from '../../assets/imgs/logo.png'
import instagram from '../../assets/imgs/Instagram.png'
import facebook from '../../assets/imgs/Facebook.png'
import twiter from '../../assets/imgs/Twiter.png'

import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <S.Logo>
      <img src={logo} alt="E-food" />
    </S.Logo>
    <S.Links>
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
    </S.Links>
    <S.FooterDescription>
      A efood é uma plataforma para FooterContainerulgação de estabelecimentos,
      a responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.FooterDescription>
  </S.FooterContainer>
)

export default Footer
