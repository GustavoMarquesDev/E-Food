import comida_Japonesa from '../../assets/imgs/Comida_Japonesa.png'
import macarrao from '../../assets/imgs/Macarrao.png'
import Food from '../../models/Comidas'
import Tag from '../Tag'
import {
  BoxImg,
  ButtonSaibaMais,
  Descricao,
  FoodCard,
  FoodDetails,
  Infos,
  MenuSection,
  Title
} from './styles'

const comidas: Food[] = [
  {
    id: 1,
    image: comida_Japonesa,
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa']
  },

  {
    id: 2,
    image: macarrao,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 3,
    image: macarrao,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 4,
    image: macarrao,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 5,
    image: macarrao,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 6,
    image: macarrao,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  }
]

const Card = () => (
  <MenuSection>
    {comidas.map((comida) => (
      <FoodCard key={comida.id}>
        {comida.infos.map((info) => (
          <Infos key={info}>
            <Tag>{info}</Tag>
          </Infos>
        ))}

        <BoxImg>
          <img src={comida.image} alt={comida.name} />
        </BoxImg>
        <FoodDetails>
          <Title> {comida.name} </Title>
          <Descricao>{comida.description}</Descricao>
          <ButtonSaibaMais>Saiba mais</ButtonSaibaMais>
        </FoodDetails>
      </FoodCard>
    ))}
  </MenuSection>
)

export default Card
