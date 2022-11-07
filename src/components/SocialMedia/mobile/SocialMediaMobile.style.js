import styled from 'styled-components';

export const SocialMediaMobileContainer = styled.div`
  display: flex;
  gap: 4rem;
`;

export const LogoMobile = styled.img`
  display: none;
  @media (max-width: 873px) {
    display: flex;
    gap: 1.375rem;
    justify-content: center;
    width: 37px;
    height: 37px;
  }
`;
