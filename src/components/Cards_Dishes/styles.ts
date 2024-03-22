import styled from 'styled-components'

import { colors } from '../../styles'

export const FoodCard = styled.div`
  width: 320px;
  height: 338px;
  padding: 8px;
  background-color: ${colors.darkPink};
  color: ${colors.lightPink};

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
  color: ${colors.lightPink};
`

export const Description = styled.p`
  color: ${colors.lightPink};
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`

export const BtnAdd = styled.button`
  display: block;
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  background-color: ${colors.lightPink};
  color: ${colors.darkPink};
  cursor: pointer;
  border: none;
`

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
  background-color: ${colors.darkPink};
  height: 344px;
  z-index: 1;

  img {
    max-width: 280px;
    height: 280px;
  }

  &:hover {
    box-shadow: 0px 25px 20px rgba(255, 203, 219, 0.04);
    transform: translateY(-3px);
    transition: all 0.5s ease;
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

export const BoxImgModal = styled.div`
  width: 280px;
  height: 280px;
`

export const BtnAddToCart = styled(BtnAdd)`
  display: inline-block;
  max-width: 218px;
`
