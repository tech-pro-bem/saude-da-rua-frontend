import styled from 'styled-components';

export const SocialMediaDesktopContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
  a {
    &:hover {
      color: #b2dffc;
    }
  }
`;

export const Logo = styled.img`
  margin-right: 1.25rem;
  vertical-align: middle;
`;
