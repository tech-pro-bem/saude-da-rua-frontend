import styled from 'styled-components';

export const Container = styled.button`
  width: 275px;
  height: 59px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 2.5rem;

  &:hover {
    background: ${(props) => props.theme.colors.dark};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary_light};
    font-size: 1.1rem;
    font-weight: 600;
  }
`;
