import styled from 'styled-components';

export const StoreRootContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0;
`;

export const Showcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
  margin-top: 64px;
  margin-bottom: 32px;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 40px;
  color: ${({ theme }) => theme.colors.primary};
  border: solid 2px ${({ theme }) => theme.colors.primary};
  border-radius: 48px;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary_light};
  }
`;
