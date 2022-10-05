import styled from 'styled-components';

export const StoreRootContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0;

  h2 {
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Showcase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: auto 0;
  margin-top: 24px;
  margin-bottom: 36px;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 48px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary_light};
  }
`;
