import styled from 'styled-components';
import { accountabilityBackgroundImage } from '@assets/donationPage';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 96px auto;
  padding: 16px;
  position: relative;
  z-index: 0;

  &::after {
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
  @media (max-width: 640px) {
    margin-bottom: 0;
    h2 {
      display: block;
      width: 100%;
      text-align: initial;
      font-size: 1.625rem;
    }
    &::after {
      content: '';
      display: none;
    }
  }
`;
export const AccountabilityContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  margin: 32px auto;
  gap: 64px;
`;
export const AccountabilityItem = styled.div`
  img {
    display: block;
    max-width: 80px;
    width: 100%;
    height: 120px;
    margin: auto;
  }
  .content {
    color: ${({ theme }) => theme.colors.primary_light};
    h3 {
      font-size: 28px;
      font-weight: 500;

      margin: 33.75px auto 26.9px;
    }

    p {
      font-size: 1.375rem;
    }
  }

  @media (max-width: 640px) {
    display: grid;
    ${(props) =>
      props.orderImage < props.orderContent
        ? 'grid-template-columns: 1fr 3fr;'
        : 'grid-template-columns: 3fr 1fr;'}
    gap: 1rem;
    align-items: start;
    justify-content: space-between !important;

    img {
      order: ${(props) => props.orderImage};
      max-width: 90.84px;
      width: 100%;
      max-height: 67.49px;
    }
    .content {
      order: ${(props) => props.orderContent};
      h3 {
        display: none;
      }
      p {
        text-align: initial;
        font-size: 1rem;
      }
    }
  }
`;
