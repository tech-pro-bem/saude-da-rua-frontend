import styled from 'styled-components';

export const PartnersText = styled.h3`
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

export const ContainerPartners = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: ${(props) => props.theme.colors.primary_light};
    margin-bottom: 64px;
  }
`;
