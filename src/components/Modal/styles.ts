import styled from 'styled-components'

import { cores } from '../../styles'
import { BtnAdicionar } from '../../components/Cards_Perfil/styles'

export const Modal = styled.div`
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  color: #fff;

  &.visivel {
    display: flex;
  }

  &.oculto {
    display: none;
  }

  h2 {
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.rosaEscuro};
  height: 344px;
  z-index: 1;

  img {
    max-width: 280px;
    height: 280px;
  }
`

export const ModalBox = styled.div`
  display: flex;
  padding: 8px 32px 0px;
  gap: 24px;
  position: relative;
  z-index: 1;
`

export const ModalHeader = styled.header`
  display: flex;
  justify-content: end;

  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    margin-top: 8px;
    cursor: pointer;
  }
`

export const BoxImg = styled.div`
  width: 280px;
  height: 280px;
`

export const BtnAdicionarCarrinho = styled(BtnAdicionar)`
  display: inline-block;
  max-width: 218px;
`
