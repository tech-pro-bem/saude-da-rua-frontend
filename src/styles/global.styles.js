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
font-weight: normal;
line-height: 32px;
font-size: 22px;
}


p.default {
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  }

h1 {
font-weight: bold;
line-height: auto;
font-size: 52px;
weight: regular
}

h2{
  font-weight: bold;
  line-height: auto;
  font-size: 40px;
  weight: regular
}

h3 {
  font-weight: bold;
  line-height: auto;
  font-size: 28px;
  weight: regular
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
