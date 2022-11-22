import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: Poppins, sans-serif;
  }

  html, body, :root {
    outline: 0;
    background: ${(props) => props.theme.colors.blackUI};
    height: 100%;
     -webkit-font-smoothing: antialiased !important;
  }

  p.big {
    font-weight: 400;
    font-size: 1.375rem;
  }


  p {
    font-weight: 400;
    font-size: 1rem;

    color: ${(props) => props.theme.colors.primary_light};
  }

  h1 {
    font-weight: 700;
    font-size: 3.25rem;
    color: ${(props) => props.theme.colors.primary_light};
  }

  h2 {
    font-weight: 600;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.primary_light};
  }

  h3 {
    font-weight: 500;
    font-size: 1.75rem;
  }

  h4 {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.primary};
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
  }

  Link {
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;

  }


  a {
      text-decoration: none;
      outline: none;
  }

  ::selection {
    background: ${(props) => props.theme.colors.light};
  }

   .container {
    width:  100%;
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 15px;
   }

  `;

export default GlobalStyle;

// Extra small   540px
// Small         720px
// Medium       960px
// Large         1140px
// Extra Large    1320px
