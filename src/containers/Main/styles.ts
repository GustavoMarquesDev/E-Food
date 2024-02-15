import styled from 'styled-components'

export const MenuSection = styled.section`
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 48px;

  @media (max-width: 1060px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 680px) {
    display: block;
  }
`
