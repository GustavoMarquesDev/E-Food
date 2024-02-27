import close from '../../assets/imgs/close.png'
import { useState } from 'react'
import * as S from './styles'
import pizza from '../../assets/imgs/Pizza.png'

const Modal = () => {
  const [modal, setModal] = useState(true)

  return (
    <S.Modal className={modal ? 'visivel' : 'oculto'}>
      <S.ModalContent className="container">
        <S.ModalHeader>
          <img
            onClick={() => setModal(false)}
            src={close}
            alt="Clique aqui para fechar"
          />
        </S.ModalHeader>
        <S.ModalBox>
          <div>
            <img src={pizza} alt="pizza" />
          </div>
          <div>
            <h2>Pizza Marguerita</h2>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br />
              <br />
              Serve: de 2 a 3 pessoas
            </p>
            <S.BtnAdicionarCarrinho>
              Adicionar ao carrinho - R$ 60,90
            </S.BtnAdicionarCarrinho>
          </div>
        </S.ModalBox>
      </S.ModalContent>
      <div className="overlay" onClick={() => setModal(false)}></div>
    </S.Modal>
  )
}

export default Modal
