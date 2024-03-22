import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { store } from './store'
import { Provider } from 'react-redux'

import { GlobalStyle } from './styles'

import { Cart } from './components/Cart'
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
