import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

  body, html {
    background: rgb(58,77,180);
    background: linear-gradient(146deg, rgba(58,77,180,1) 0%, rgba(0,184,254,1) 100%);
    color: #fff;
    -webkit-font-smoothing: antialised;
  }

  body,input,button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
}
`
