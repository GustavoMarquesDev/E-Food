import Loader from '../../components/Loader'
import Hero from '../../components/Header_Restaurants'
import MainContainer from '../../components/Restaurantes'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Hero />
        <div className="container">
          <MainContainer restaurant={restaurants} />
        </div>
      </>
    )
  }

  return <Loader />
}

export default Home
