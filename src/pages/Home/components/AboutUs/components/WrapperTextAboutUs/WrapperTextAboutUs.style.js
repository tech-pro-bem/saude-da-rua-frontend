import styled from 'styled-components';

// TODO:
// - alterar os nomes das constantes e manter um padrão

// que tag HTML é essa text????
// utilizar variaveis do tema para cores
// se foi setado globalmente a tipografia, não é necessário coloca-la aqui de novo
// lembrar de utilizar hierarquia das tags h1,h2,h3, p, etc...

export const QuemSomosTitle = styled.text`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  color: #e9e9e9;
  width: 100%;
  max-width: 479px;
  min-height: 60px;
  left: 833px;
  top: 127px;
`;

export const AboutText = styled.text`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 21.328px;
  line-height: 32px;
  font-feature-settings: 'pnum' on, 'onum' on;
  color: #e9e9e9;
  margin-top: 5px;
  width: 100%;
  max-width: 477px;
  height: 530px;
`;
