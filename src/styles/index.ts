import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaClaro: '#FFEBD9',
  rosaEscuro: '#E66767',
  rosa: '#FFEBD9',
  rosaDeFundo: '#FFF8F2'
}

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: Roboto, sans-serif;

  body {
    background-color: ${cores.rosaDeFundo};
  }
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

}
`
