import styled from 'styled-components';

export const Container = styled.section`
  h2 {
    margin-bottom: 50px;
  }

  h3 {
    font-size: 24px;
    color: ${(props) => props.theme.colors.primary_light};
  }
`;

export const TextWhereAreWe = styled.div`
  width: 100%;
  padding-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Sede = styled.p`
  margin-bottom: 46px;

  color: ${(props) =>
    props.sede ? props.theme.colors.primary : props.theme.colors.primary_light};
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      props.sede
        ? props.theme.colors.primary
        : props.theme.colors.primary_light};
  }

  transition: all 0.3s;
`;

export const City = styled.p`
  margin-bottom: 8px;
  color: ${(props) =>
    props.active
      ? props.theme.colors.primary
      : props.theme.colors.primary_light};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  cursor: pointer;
  transition: all 0.3s;
`;

export const WrapCircles = styled.div`
  display: block;
  height: 647px;
`;

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

export const CircleRioPreto = styled(CircleCampinas)`
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

export const CircleSaoCarlos = styled(CircleCampinas)`
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

export const CircleSorocaba = styled(CircleCampinas)`
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

export const CircleItajai = styled(CircleCampinas)`
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
