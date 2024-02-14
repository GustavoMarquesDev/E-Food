import Card from './components/Cards'
import Footer from './components/Footer'
import Hero from './components/Header'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <div className="container">
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default App
