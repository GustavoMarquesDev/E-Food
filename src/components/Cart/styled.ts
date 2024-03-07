import styled from 'styled-components'
import { cores } from '../../styles'
import { BtnAdicionar } from '../Cards_Pratos/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000;
  opacity: 0.8;
  width: 100%;
  height: 100%;
`

export const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  justify-content: end;
  display: none;
  top: 0;
  left: 0;
  color: ${cores.rosaEscuro};

  &.is-open {
    display: flex;
  }
`

export const Aside = styled.aside`
  background-color: ${cores.rosaEscuro};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 40px 8px;

  ${BtnAdicionar} {
    color: ${cores.rosaEscuro};
    margin-top: 16px;
  }

  h3 {
    color: ${cores.rosaClaro};
    text-align: center;
  }
`

export const CartFood = styled.li`
  background-color: ${cores.rosaClaro};
  display: flex;
  gap: 8px;
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
  }

  span {
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;

    img {
      width: 16px;
      height: 16px;
      object-fit: cover;
    }
  }
`

export const Prices = styled.div`
  color: ${cores.rosa};
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  p {
    font-size: 14px;
    font-weight: 700;
  }

  span {
    font-size: 14px;
    font-weight: 700;
  }
`
