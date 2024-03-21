import { useState } from 'react'
import { BtnAdicionar } from '../Cards_Pratos/styles'
import { Overlay } from '../Cart/styled'
import * as S from './styles'
import InputMask from 'react-input-mask'

export const Checkout = ({
  setDelivery
}: {
  setDelivery: (value: boolean) => void
}) => {
  return (
    // ***********************  Entrega ************************************
    <S.CheckoutContainer>
      <Overlay />
      <S.Aside>
        <div className="is-visible">
          <h4>Entrega</h4>
          <form>
            <S.Row marginTop="16px">
              <S.InputGroup>
                <label htmlFor="cliente">Quem irá receber</label>
                <input type="text" id="cliente" name="cliente" />
              </S.InputGroup>
            </S.Row>
            <S.Row marginTop="8px">
              <S.InputGroup>
                <label htmlFor="endereco">Endereço</label>
                <input type="text" id="endereco" name="endereco" />
              </S.InputGroup>
            </S.Row>
            <S.Row marginTop="8px">
              <S.InputGroup>
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade" />
              </S.InputGroup>
            </S.Row>
            <S.Row marginTop="8px">
              <S.InputGroup>
                <div>
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    type="text"
                    id="cep"
                    name="cep"
                    mask={'99999-999'}
                  />
                </div>
              </S.InputGroup>
              <S.InputGroup>
                <div>
                  <label htmlFor="numero">Número</label>
                  <input type="number" id="numero" name="numero" />
                </div>
              </S.InputGroup>
            </S.Row>
            <S.Row marginTop="8px">
              <S.InputGroup>
                <label htmlFor="complemento">Complemento (opcional)</label>
                <input type="text" id="complemento" name="complemento" />
              </S.InputGroup>
            </S.Row>
            <S.ButtonDiv>
              <BtnAdicionar>Continuar com o pagamento</BtnAdicionar>
              <BtnAdicionar onClick={() => setDelivery(false)}>
                Voltar para o carrinho
              </BtnAdicionar>
            </S.ButtonDiv>
          </form>
        </div>

        {/* **************** PAGAMENTO *************************** */}
        <div className="is-visibleTwo">
          <h4>Pagamento - Valor a pagar R$ 190,90</h4>
          <form>
            <S.Row marginTop="16px">
              <S.InputGroup>
                <label htmlFor="userName">Nome no cartao</label>
                <input type="text" id="userName" name="userName" />
              </S.InputGroup>
            </S.Row>
            <S.Row marginTop="8px">
              <S.InputGroup maxWidth="228px">
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  mask={'9999 9999 9999 9999'}
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="87px">
                <label htmlFor="cvv">CVV</label>
                <InputMask type="text" id="cvv" name="cvv" mask={'999'} />
              </S.InputGroup>
            </S.Row>
            <S.Row marginTop="8px">
              <S.InputGroup>
                <label htmlFor="vencimento">Mês de Vencimento</label>
                <InputMask
                  type="text"
                  id="vencimento"
                  name="vencimento"
                  mask={'99'}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="ano de vencimento">Ano de vencimento</label>
                <InputMask
                  type="text"
                  id="ano de vencimento"
                  name="ano de vencimento"
                  mask={'99'}
                />
              </S.InputGroup>
            </S.Row>
            <S.ButtonDiv>
              <BtnAdicionar>Finalizar pagamento</BtnAdicionar>
              <BtnAdicionar>Voltar para a edição de endereço</BtnAdicionar>
            </S.ButtonDiv>
          </form>
        </div>
      </S.Aside>
    </S.CheckoutContainer>
  )
}
