import styled from 'styled-components';

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
