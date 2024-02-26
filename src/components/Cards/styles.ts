import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const FoodCard = styled.div`
  width: 472px;
  height: 398px;
  position: relative;

  @media (max-width: 1060px) {
    margin: 0 auto;
  }

  @media (max-width: 680px) {
    margin-bottom: 20px;
  }
`
export const FoodDetails = styled.div`
  background-color: #fff;
  border: 1px solid ${cores.rosaEscuro};
  border-top: none;
  padding: 0 8px;
  height: 181px;
`
export const TitleDetails = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DivNota = styled.div`
  width: 55px;
  display: flex;
  gap: 8px;
  align-items: center;
`
export const Estrela = styled.span`
  width: 21px;
  height: 21px;
`

export const BoxImg = styled.div`
  height: 217px;
  overflow: hidden;

  img {
    width: 100%;
  }
`
export const Title = styled.h2`
  padding-top: 8px;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosaEscuro};
`

export const Descricao = styled.p`
  color: ${cores.rosaEscuro};
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0px;
`

export const ButtonSaibaMais = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  background-color: ${cores.rosaEscuro};
  padding: 4px 6px;
  color: ${cores.rosa};
  border: none;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
