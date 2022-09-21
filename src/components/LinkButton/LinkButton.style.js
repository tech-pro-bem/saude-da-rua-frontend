import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: inline-block;
  font-weight: 600;
  line-height: 27px;
  padding: 16px 44px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 2.5rem;
  color: ${(props) => props.theme.colors.primary_light};
  font-size: 18px;
  transition: all 0.2s;
  &:hover {
    background: ${(props) => props.theme.colors.dark};
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 327px;
  }
`;
