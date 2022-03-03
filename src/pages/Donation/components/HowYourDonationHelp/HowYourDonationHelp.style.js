import styled from 'styled-components';
import { accountabilityBackgroundImage } from '../../../../assets/donationPage';

export const Container = styled.div`
  height: 30vw;
  padding: 40px;
  text-align: center;
  margin: 40px auto;
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
    background-position: center center;
    background-blend-mode: overlay;
    filter: blur(2px);
    z-index: -1;
  }
`;

export const AccountabilityContainer = styled.div`
  display: flex;
  margin: 32px auto;
`;

export const AccountabilityItem = styled.div`
  width: 356px;

  > img {
    width: 120px;
    height: 120px;
  }
`;
