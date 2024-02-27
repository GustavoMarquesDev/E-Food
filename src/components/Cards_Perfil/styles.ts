import styled from 'styled-components'

import { cores } from '../../styles'

export const FoodCard = styled.div`
  width: 320px;
  height: 338px;
  padding: 8px;
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosaClaro};

  @media (max-width: 1060px) {
    margin: 0 auto;
  }

  @media (max-width: 680px) {
    margin-bottom: 20px;
  }
`

export const BoxImg = styled.div`
  height: 167px;
  width: 304px;
  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }
`
export const Title = styled.h2`
  padding-top: 8px;
  font-size: 16px;
  font-weight: 900;
  color: ${cores.rosaClaro};
`

export const Descricao = styled.p`
  color: ${cores.rosaClaro};
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`

export const BtnAdicionar = styled.button`
  display: block;
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  background-color: ${cores.rosaClaro};
  color: ${cores.rosaEscuro};
  cursor: pointer;
  border: none;
`
