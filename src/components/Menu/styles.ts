import styled from 'styled-components'

export const MenuSection = styled.section`
  width: 1024px;
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 1060px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  @media (max-width: 680px) {
    display: block;
  }
`
