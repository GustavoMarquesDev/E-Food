import Loader from '../../components/Loader'
import Hero from '../../components/Hero'
import MainContainer from '../../components/Restaurants'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Hero type="menu" />
        <div className="container">
          <MainContainer restaurant={restaurants} />
        </div>
      </>
    )
  }

  return <Loader />
}

export default Home
