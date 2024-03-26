import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const BannerDiv = styled.div`
  padding-top: 40px;
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.darkPink};
  padding-top: 64px;
  img {
    padding-left: 45px;
  }

  @media (max-width: 1060px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`
export const BannerDivIten = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BackHome = styled(Link)`
  width: 125px;
  height: 58px;

  @media (max-width: 565px) {
    img {
      padding-left: 0px;
    }
  }
`

export const BannerText = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.darkPink};

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

  @media (max-width: 565px) {
    display: none;
  }
`
export const Cesta = styled.div`
  display: none;
  width: 55px;
  border: 5px solid ${colors.darkPink};
  background-color: transparent;

  img {
    width: 45px;
    height: 30px;
    color: black;
    padding-left: 0;
  }

  @media (max-width: 565px) {
    display: block;
  }
`

export const HeroDiv = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${colors.darkPink};
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

  @media (max-width: 1060px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export const HeroType = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: #fff;
  padding-top: 24px;
`

export const HeroName = styled.p`
  font-weight: 900;
  margin-top: 156px;
  color: #fff;
  font-size: 32px;
`

export const Banner = styled.header`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.darkPink};
  padding-top: 64px;
`

export const HeaderContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 36px;
  line-height: 42px;
  width: 539px;
  font-weight: 900;
  text-align: center;
  margin: 0 auto;
  margin-top: 138.5px;

  @media (max-width: 600px) {
    font-size: 25px;
    max-width: 320px;
    margin-top: 60px;
  }
`
