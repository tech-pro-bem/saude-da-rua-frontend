import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

}

html,body, #root {
    height: 100%;
    font-family: 'Poppins', sans-serif;
}


p.big {
font-weight: 400;
line-height: 2rem;
font-size: 1.375rem;
}


p.default {
  font-weight: 400;
  line-height: 1.5rem;
  font-size: 1rem;
  }

h1 {
font-weight: 700;
line-height: 4.875rem;
font-size: 3.25rem;
}

h2{
  font-weight: 600;
  line-height: 3.75rem;
  font-size: 2.5rem;
}

h3 {
  font-weight: 500;
  line-height: 2.625rem;
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

`;
export default globalStyle;
