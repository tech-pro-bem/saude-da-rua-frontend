import styled from 'styled-components';

// TODO:
// - alterar os nomes das constantes e manter um padrão ok

// que tag HTML é text???? alterei para div
// utilizar variaveis do tema para cores ok
// se foi setado globalmente a tipografia, não é necessário coloca-la aqui de novo
// lembrar de utilizar hierarquia das tags h1,h2,h3, p, etc...

export const AboutTitle = styled.h1`
  line-height: 60px;
  color: ${(props) => props.theme.colors.primary_light};
  width: 100%;
  width: 479px;
  height: 60px;
  margin-left: 485px;
  margin-top: -600px;
`;

export const AboutText = styled.div`
  line-height: 32px;
  font-feature-settings: 'pnum' on, 'onum' on;
  color: ${(props) => props.theme.colors.primary_light};
  margin-top: 100px;
  width: 477px;
  height: 530px;
  margin-left: 500px;

  display: flex;
  flex-wrap: wrap;
  // padding-top: 32px;
`;
