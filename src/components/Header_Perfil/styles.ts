import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerDiv = styled.div`
  width: 100%;
  height: 163px;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${cores.rosaEscuro};
  img {
    padding-left: 85px;
    margin-top: -20px;
  }
`
export const BannerDivItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`

export const BannerText = styled.p`
  font-size: 18px;
  font-weight: 900;
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
  margin-top: 16px;
  z-index: 200;
`

export const HeroName = styled(HeroTipo)`
  font-weight: 900;
  margin-top: 156px;
`
