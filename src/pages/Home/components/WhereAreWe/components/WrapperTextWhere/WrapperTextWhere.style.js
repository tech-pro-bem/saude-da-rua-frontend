import styled from 'styled-components';

///** TODO:
// utilizar variaveis do tema para cores ok
// se foi setado globalmente a tipografia, não é necessário coloca-la aqui de novo ok
// consistencia de linguagem ok

export const WhereAreWeTitle = styled.h2`
  display: block;
  width: 100%;
  height: 100%;
  margin-left: -64px; //-20
  margin-top: -320px;
  color: ${(props) => props.theme.colors.primary_light};
`;

export const WhereAreWeSubTitle1 = styled.p`
  display: block;
  width: 100%; //61px
  height: 50%; //36px
  margin-top: -100px;
  margin-left: -500px;
  position: relative;

  color: ${(props) => props.theme.colors.primary_light};
`;
export const WhereAreWeSubTitle2 = styled.p`
  display: block;
  width: 100%; //223px
  height: 50%; //36px
  position: relative;
  margin-left: -480px;
  color: ${(props) => props.theme.colors.primary};
`;

export const TextWhereAreWe = styled.p`
  display: block;
  width: 100%; //485px
  height: 50%; //35px
  margin-top: 250px;
  margin-left: -480px;
  position: relative;
  color: ${(props) => props.theme.colors.primary_light};
`;
