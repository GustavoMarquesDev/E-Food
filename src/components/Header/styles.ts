import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.header`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${cores.rosaEscuro};
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
`
