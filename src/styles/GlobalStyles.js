import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }

  html,body, :root {
    font-family: ${(props) => props.theme.font.fontFamily}
    outline: 0;
    background: ${(props) => props.theme.colors.black}
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
  }


  a{
      text-decoration: none;
      outline: none;
  }

  ::selection {
    background: ${(props) => props.theme.colors.light};
  }
  `;

export default globalStyle;
