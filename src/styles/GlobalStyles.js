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
    line-height: auto;
    font-size: 1.375rem;
  }


  p {
    font-weight: 400;
    line-height: auto;
    font-size: 1rem;
  }

  h1 {
    font-weight: 700;
    line-height: auto;
    font-size: 3.25rem;
    color: ${(props) => props.theme.colors.primary_light};
  }

  h2{
    font-weight: 600;
    line-height: auto;
    font-size: 2.5rem;
  }

  h3 {
    font-weight: 500;
    line-height: auto;
    font-size: 1.75rem;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    line-height: auto;
    font-size: 1rem;
    font-weight: 400;
  }

  Link {
    border: none;
    outline: none;
    cursor: pointer;
    line-height: auto;
    font-size: 1rem;
    font-weight: 400;

  }


  a{
      text-decoration: none;
      outline: none;
  }

  ::selection {
    background: ${(props) => props.theme.colors.light};
  }
  `;

export default GlobalStyle;
