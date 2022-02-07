import styled from 'styled-components';

export const TextWhereAreWe = styled.div`
  width: 488px;
  height: 489.45px;
  padding-left: 1px;
  padding-top: 10px;
  margin-left: -40px;
`;

export const WhereAreWeTitle = styled.h2`
  margin-bottom: 43px;
`;

export const WhereAreWeSubTitle1 = styled.p`
  margin-bottom: 10px;
`;

export const Sede = styled.p`
  margin-bottom: 46px;

  color: ${(props) =>
    props.sede ? props.theme.colors.primary : props.theme.colors.primary_light};

  //Efeito hover
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${(props) =>
      props.sede
        ? props.theme.colors.primary
        : props.theme.colors.primary_light};
  }
  &:active {
    color: ${(props) =>
      props.sede
        ? props.theme.colors.primary
        : props.theme.colors.primary_light};
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: box-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
`;

//componentes das filiais
export const Campinas = styled.p`
  color: ${(props) =>
    props.campinas
      ? props.theme.colors.primary
      : props.theme.colors.primary_light};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${(props) =>
      props.campinas
        ? props.theme.colors.primary
        : props.theme.colors.primary_light};
  }
  &:active {
    color: ${(props) =>
      props.campinas
        ? props.theme.colors.primary
        : props.theme.colors.primary_light};
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: box-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
`;

export const RioPreto = styled.p`
  color: ${(props) =>
    props.rioPreto
      ? props.theme.colors.primary
      : props.theme.colors.primary_light};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${(props) =>
      props.rioPreto
        ? props.theme.colors.primary
        : props.theme.colors.primary_light};
  }
  &:active {
    color: ${(props) =>
      props.rioPreto
        ? props.theme.colors.primary
        : props.theme.colors.primary_light};
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: box-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
`;

export const SaoCarlos = styled.p`
  color: ${(props) =>
    props.saoCarlos
      ? props.theme.colors.primary
      : props.theme.colors.primary_light};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${(props) =>
      props.saoCarlos
        ? props.theme.colors.primary
        : props.theme.colors.primary_light};
  }
  &:active {
    color: ${(props) =>
      props.saoCarlos
        ? props.theme.colors.primary
        : props.theme.colors.primary_light};
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: box-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
`;

export const Sorocaba = styled.p`
  color: ${(props) =>
    props.sorocaba
      ? props.theme.colors.primary
      : props.theme.colors.primary_light};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${(props) =>
      props.sorocaba
        ? props.theme.colors.primary
        : props.theme.colors.primary_light};
  }
  &:active {
    color: ${(props) =>
      props.sorocaba
        ? props.theme.colors.primary
        : props.theme.colors.primary_light};
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: box-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
`;

export const Itajai = styled.p`
  color: ${(props) =>
    props.itajai
      ? props.theme.colors.primary
      : props.theme.colors.primary_light};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${(props) =>
      props.itajai
        ? props.theme.colors.primary
        : props.theme.colors.primary_light};
  }
  &:active {
    color: ${(props) =>
      props.itajai
        ? props.theme.colors.primary
        : props.theme.colors.primary_light};
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: box-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
`;

//componente geral
export const Circle = styled.div`
  display: block;
  width: 1439px;
  height: 647px;
`;

//circle  Modelo SEDE

export const CircleSede = styled.div`
  display: block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  margin-left: 850px;
  margin-top: 0px;

  background-color: ${(props) =>
    props.sede ? props.theme.colors.primary : props.theme.colors.primary_light};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

//cada Filial terá um ------ CIRCULOS herdando da sede
export const CircleCampinas = styled.div`
  display: block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  margin-left: 840px;
  margin-top: -180px;

  background-color: ${(props) =>
    props.campinas
      ? props.theme.colors.primary
      : props.theme.colors.primary_light};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const CircleRioPreto = styled.div`
  display: block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  margin-left: 850px;
  margin-top: -70px;

  background-color: ${(props) =>
    props.rioPreto
      ? props.theme.colors.primary
      : props.theme.colors.primary_light};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const CircleSaoCarlos = styled.p`
  display: block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  margin-left: 860px;
  margin-top: 25px;

  background-color: ${(props) =>
    props.saoCarlos
      ? props.theme.colors.primary
      : props.theme.colors.primary_light};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const CircleSorocaba = styled.div`
  display: block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  margin-left: 860px;
  margin-top: 0px;

  background-color: ${(props) =>
    props.sorocaba
      ? props.theme.colors.primary
      : props.theme.colors.primary_light};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const CircleItajai = styled.div`
  display: block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  margin-left: 815px;
  margin-top: 50px;

  background-color: ${(props) =>
    props.itajai
      ? props.theme.colors.primary
      : props.theme.colors.primary_light};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
