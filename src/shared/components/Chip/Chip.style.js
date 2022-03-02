import styled from 'styled-components';

export const Container = styled.span`
  display: block;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primary_light : theme.colors.primary};
  min-width: 96px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : 'transparent'};
  padding: 8px 16px;
  border-radius: 80px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary_light};
    border-color: transparent;
  }
`;
