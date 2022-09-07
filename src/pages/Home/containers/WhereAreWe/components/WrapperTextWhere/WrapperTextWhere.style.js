import styled from 'styled-components';

export const Container = styled.section`
  h2 {
    margin-bottom: 50px;

    @media screen and (max-width: 520px) {
      font-size: 1.625rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 39px;
    }
  }

  h3 {
    font-size: 24px;
    color: ${(props) => props.theme.colors.primary_light};

    @media screen and (max-width: 520px) {
      font-size: 1.375rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      line-height: 33px;
      color: ${(props) => props.theme.colors.light};
    }
  }
`;

export const TextWhereAreWe = styled.div`
  width: 100%;
  padding-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 520px) {
    padding-top: 0;
  }
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

  @media screen and (max-width: 520px) {
    margin-bottom: 1.5rem;
  }
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

  @media screen and (max-width: 520px) {
    line-height: 24px;
    margin-bottom: 0;
    font-size: 1rem;
  }
`;

export const WrapCircles = styled.div`
  display: block;
  height: 647px;

  @media screen and (max-width: 520px) {
    display: none;
  }
`;

export const CircleSede = styled.div`
  display: block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  margin-left: 790px;
  margin-top: -15px;

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
  margin-left: 740px;
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
  margin-left: 750px;
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
  margin-left: 760px;
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
  margin-left: 760px;
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
  margin-left: 735px;
  margin-top: 85px;

  background-color: ${(props) =>
    props.itajai
      ? props.theme.colors.primary
      : props.theme.colors.primary_light};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
