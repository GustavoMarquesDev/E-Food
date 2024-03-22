import { createGlobalStyle } from 'styled-components'

export const colors = {
  lightPink: '#FFEBD9',
  darkPink: '#E66767',
  pink: '#FFEBD9',
  pinkBackground: '#FFF8F2'
}

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: Roboto, sans-serif;
  outline: none;

  body {
    background-color: ${colors.pinkBackground};
  }
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

}
`
