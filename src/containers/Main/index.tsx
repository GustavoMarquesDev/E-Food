import Card from '../../components/Cards'
import Food from '../../models/Comidas'
import comida_Japonesa from '../../assets/imgs/Comida_Japonesa.png'
import macarrao from '../../assets/imgs/Macarrao.png'
import { MenuSection } from './styles'

const comidas: Food[] = [
  {
    id: 1,
    image: comida_Japonesa,
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    nota: 4.9
  },

  {
    id: 2,
    image: macarrao,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    nota: 4.6
  },
  {
    id: 3,
    image: macarrao,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    nota: 4.6
  },
  {
    id: 4,
    image: macarrao,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    nota: 4.6
  },
  {
    id: 5,
    image: macarrao,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    nota: 4.6
  },
  {
    id: 6,
    image: macarrao,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    nota: 4.6
  }
]

const MainContainer = () => (
  <MenuSection>
    {comidas.map((comida) => (
      <Card
        key={comida.id}
        description={comida.description}
        name={comida.name}
        nota={comida.nota}
        image={comida.image}
        infos={comida.infos}
        id={comida.id}
      />
    ))}
  </MenuSection>
)

export default MainContainer
