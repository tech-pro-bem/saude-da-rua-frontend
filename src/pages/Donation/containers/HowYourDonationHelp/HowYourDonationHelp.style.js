import styled from 'styled-components';
import { accountabilityBackgroundImage } from '@assets/donationPage';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 660px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 96px auto;
  padding: 16px;
  position: relative;
  z-index: 0;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(32, 32, 32, 0.7);
    background-image: url(${accountabilityBackgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: overlay;
    filter: blur(4px);
    z-index: -1;
  }
`;

export const AccountabilityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 32px auto;
  gap: 64px;
`;

export const AccountabilityItem = styled.div`
  width: 356px;

  > img {
    width: 120px;
    height: 120px;
  }

  > h3 {
    font-size: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary_light};
    margin: 33.75px auto 26.9px;
  }

  > p {
    font-size: 22px;
  }
`;
