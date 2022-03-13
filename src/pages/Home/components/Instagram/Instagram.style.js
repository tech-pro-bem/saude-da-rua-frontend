import styled from 'styled-components';

export const ContainerInstagram = styled.div`
  display: block;
  height: 458px;
  align-items: center;
  align-content: center;
  justify-content: center;

  margin-top: 100px;
  margin-left: 536px;
`;

export const InstagramText = styled.h3`
  display: block;
  width: 50%;
  height: 42px;
  margin-left: -200px;
  margin-top: auto;
  margin-bottom: 64px;
  color: ${(props) => props.theme.colors.primary_light};

  span {
    display: block;
    width: 50%;
    height: 42px;
    margin-left: 270px;
    margin-top: -42px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
