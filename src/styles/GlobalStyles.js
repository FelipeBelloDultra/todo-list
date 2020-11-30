import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fafafa;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Baloo Tamma 2', cursive;
    font-size: 15px;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  #root {
    min-width: 100vw;
    min-height: 100vh;
  }
`;
