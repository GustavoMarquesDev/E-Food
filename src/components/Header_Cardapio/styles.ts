import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const BannerDiv = styled.div`
  padding-top: 40px;
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${cores.rosaEscuro};
  padding-top: 64px;
  img {
    padding-left: 45px;
  }
`
export const BannerDivItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const VoltarHome = styled(Link)`
  width: 125px;
  height: 58px;
`

export const BannerText = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.rosaEscuro};

  span {
    cursor: pointer;
  }
`

export const BannerCart = styled.p`
  font-size: 18px;
  font-weight: 900;

  span {
    cursor: pointer;
  }
`

export const HeroDiv = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${cores.rosaEscuro};
  position: relative;
  z-index: -1;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    content: '';
    opacity: 0.2;
    z-index: -1;
  }
`

export const HeroTipo = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: #fff;
`

export const HeroName = styled(HeroTipo)`
  font-weight: 900;
  margin-top: 156px;
`
