import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${colors.pink};
  height: 298px;
  max-width: 100%;
  width: 100%;
  margin-top: 120px;
  text-align: center;
`

export const Logo = styled.div`
  img {
    margin-top: 40px;
  }
`
export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 24px;
  margin-top: 32.5px;
`

export const FooterDescription = styled.h3`
  font-size: 10px;
  color: ${colors.darkPink};
  margin: 0 auto;
  width: 480px;
  height: 24px;
  margin-top: 80px;
`
