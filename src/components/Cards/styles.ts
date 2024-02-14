import styled from 'styled-components'
import { cores } from '../../styles'

export const FoodCard = styled.div`
  width: 472px;
  height: 398px;
  position: relative;
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

export const ButtonSaibaMais = styled.button`
  width: 82px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosa};
  cursor: pointer;
  border: none;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
