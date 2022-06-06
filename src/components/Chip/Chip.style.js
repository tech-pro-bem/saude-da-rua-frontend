import styled from 'styled-components';

export const Container = styled.span`
  display: block;
  font: 500 18px Poppins, sans-serif;
  text-align: center;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primary_light : theme.colors.primary};
  min-width: ${({ width = 'auto' }) => width};
  min-height: ${({ height = 'auto' }) => height};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : 'transparent'};
  padding: ${({ padding = '8px 16px' }) => padding};
  border-radius: 40px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary_light};
    border-color: transparent;
  }
`;
