import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  width: 275px;
  height: 59px;
  padding: 0.5rem 1rem;

  background: ${(props) => props.theme.colors.primary};
  border-radius: 2.5rem;

  color: ${(props) => props.theme.colors.primary_light};
  font-size: 18px;

  transition: all 0.2;

  &:hover {
    background: ${(props) => props.theme.colors.dark};
  }
`;
