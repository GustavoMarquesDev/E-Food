import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.rosa};
  height: 298px;
  max-width: 100%;
  width: 100%;
  margin-top: 120px;
  text-align: center;

  img {
    margin-top: 40px;
  }
`

export const FooterDescription = styled.h3`
  font-size: 10px;
  color: ${cores.rosaEscuro};
  margin: 0 auto;
  width: 480px;
  height: 24px;
  margin-top: 64px;
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
