import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import { BtnAdd } from '../Cards_Dishes/styles'
import { Overlay } from '../Cart/styled'

import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import { usePurchaseMutation } from '../../services/api'
import { parseToBrl, getTotalPrice } from '../../utils'

import * as S from './styles'

export const Checkout = ({
  setDelivery
}: {
  setDelivery: (value: boolean) => void
}) => {
  const [userAddress, setUserAddress] = useState(false)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const { itens } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      addressComplement: '',
      nameOwner: '',
      numberOwner: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres.')
        .required('O campo é obrigatório.'),
      address: Yup.string()
        .min(5, 'Endereço inválido!')
        .required('Campo obrigatório!'),
      city: Yup.string()
        .min(5, 'Cidade inválida!')
        .required('Campo obrigatório!'),
      cep: Yup.string()
        .min(8, 'Cep inválido!')
        .max(9, 'Cep inválido')
        .required('Campo obrigatório!'),
      number: Yup.string()
        .min(1, 'Número inválido')
        .required('Campo obrigatório!'),
      addressComplement: Yup.string().optional(),
      nameOwner: Yup.string()
        .min(5, 'Nome inválido')
        .required('Campo obrigatório!'),
      numberOwner: Yup.string()
        .min(16, 'Cartão inválido')
        .required('Campo obrigatório!'),
      cardCode: Yup.string()
        .min(2, 'CVV inválido!')
        .required('Campo obrigatório!'),
      expiresMonth: Yup.string()
        .min(2, 'Mês inválido!')
        .required('Campo obrigatório!'),
      expiresYear: Yup.string()
        .min(2, 'Ano inválido')
        .required('Campo obrigatório!')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.addressComplement
          }
        },
        payment: {
          card: {
            name: values.nameOwner,
            number: values.numberOwner,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: itens.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const formAdressIsValid = () => {
    const isValid =
      !form.errors.fullName &&
      !form.errors.address &&
      !form.errors.city &&
      !form.errors.cep &&
      !form.errors.number &&
      form.touched.address

    if (isValid) {
      setUserAddress(true)
    } else {
      alert('Por favor, complete os dados de entrega corretamente.')
    }
  }

  const checkoutInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const confirmPayment = () => {
    form.handleSubmit()
  }

  const finishPayment = () => {
    navigate('/')
    window.location.reload()
  }

  return (
    // ***********************  Entrega ************************************
    <S.CheckoutContainer>
      <Overlay />
      <S.Aside>
        {!userAddress && !isSuccess && (
          <div className="is-visible">
            <form onSubmit={form.handleSubmit}>
              <h4>Entrega</h4>
              <S.Row marginTop="16px">
                <S.InputGroup>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkoutInputHasError('fullName') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row marginTop="8px">
                <S.InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkoutInputHasError('address') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row marginTop="8px">
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkoutInputHasError('city') ? 'error' : ''}
                  />
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
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkoutInputHasError('cep') ? 'error' : ''}
                    />
                  </div>
                </S.InputGroup>
                <S.InputGroup>
                  <div>
                    <label htmlFor="number">Número</label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkoutInputHasError('number') ? 'error' : ''}
                    />
                  </div>
                </S.InputGroup>
              </S.Row>
              <S.Row marginTop="8px">
                <S.InputGroup>
                  <label htmlFor="addressComplement">
                    Complemento (opcional)
                  </label>
                  <input
                    type="text"
                    id="addressComplement"
                    name="addressComplement"
                    value={form.values.addressComplement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.InputGroup>
              </S.Row>
              <S.ButtonDiv>
                <BtnAdd type="button" onClick={() => formAdressIsValid()}>
                  Continuar com o pagamento
                </BtnAdd>
                <BtnAdd onClick={() => setDelivery(false)}>
                  Voltar para o carrinho
                </BtnAdd>
              </S.ButtonDiv>
            </form>
          </div>
        )}

        {/* *********************** PAGAMENTO ********************** */}
        {userAddress && !isSuccess && (
          <div className="is-visibleTwo">
            <h4>
              Pagamento - Valor a pagar {parseToBrl(getTotalPrice(itens))}{' '}
            </h4>
            <form>
              <S.Row marginTop="16px">
                <S.InputGroup>
                  <label htmlFor="nameOwner">Nome no cartao</label>
                  <input
                    type="text"
                    id="nameOwner"
                    name="nameOwner"
                    value={form.values.nameOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkoutInputHasError('nameOwner') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row marginTop="8px">
                <S.InputGroup maxWidth="228px">
                  <label htmlFor="numberOwner">Número do cartão</label>
                  <InputMask
                    type="text"
                    id="numberOwner"
                    name="numberOwner"
                    mask={'9999 9999 9999 9999'}
                    value={form.values.numberOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkoutInputHasError('numberOwner') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup maxWidth="87px">
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    mask={'999'}
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkoutInputHasError('cardCode') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row marginTop="8px">
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresMonth"
                    name="expiresMonth"
                    mask={'99'}
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkoutInputHasError('expiresMonth') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    mask={'99'}
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkoutInputHasError('expiresYear') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
              </S.Row>
              <S.ButtonDiv>
                <BtnAdd
                  onClick={confirmPayment}
                  type="button"
                  title="Clique aqui para finalizar o pagamento"
                >
                  Finalizar pagamento
                </BtnAdd>
                <BtnAdd onClick={() => setUserAddress(false)}>
                  Voltar para a edição de endereço
                </BtnAdd>
              </S.ButtonDiv>
            </form>
          </div>
        )}

        {/* *********************** CONFIRMAÇÃO DE SUCESSO ******************************* */}

        {isSuccess && data && userAddress && (
          <div className="is-visibleThree">
            <h4>Pedido realizado - {data?.orderId}</h4>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <BtnAdd
              type="button"
              title="clique aqui para concluir sua compra"
              onClick={finishPayment}
            >
              Concluir
            </BtnAdd>
          </div>
        )}
      </S.Aside>
    </S.CheckoutContainer>
  )
}
