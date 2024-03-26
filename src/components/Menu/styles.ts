import styled from 'styled-components'

export const MenuSection = styled.section`
  max-width: 1024px;
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 1060px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 680px) {
    display: block;
  }
`
