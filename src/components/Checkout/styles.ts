import styled from 'styled-components'
import { cores } from '../../styles'
import { BtnAdicionar } from '../Cards_Pratos/styles'

type RowProps = {
  marginTop?: string
}

type InputProps = {
  maxWidth?: string
}

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  justify-content: end;
  display: flex;
  top: 0;
  left: 0;
  color: ${cores.rosaEscuro};
`
export const Aside = styled.aside`
  background-color: ${cores.rosaEscuro};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px;

  .is-visible {
    display: block;
  }

  .is-visibleTwo {
    display: none;
  }

  ${BtnAdicionar} {
    color: ${cores.rosaEscuro};
    margin-bottom: 8px;
  }

  h4 {
    color: ${cores.rosaClaro};
    font-weight: 700;
    font-size: 16px;
  }
`
export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;
`

export const InputGroup = styled.div<InputProps>`
  flex: auto;
  flex-direction: column;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    color: ${cores.rosaClaro};
    font-weight: 700;
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
  }

  input {
    padding: 8px;
    color: #4b4b4b;
    font-size: 14px;
    font-weight: 700;
    height: 32px;
    border: 0;
    display: block;
    width: 100%;
  }
`

export const ButtonDiv = styled.div`
  margin-top: 24px;
`
