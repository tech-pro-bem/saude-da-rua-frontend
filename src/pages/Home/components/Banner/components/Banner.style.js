import styled from 'styled-components';

export const BannerContainer = styled.div`
  .bannerPhoto {
    height: 39rem;
    width: 100%;
    max-width: 90rem;
    position: absolute;
    opacity: 0.4;
  }
`;

export const Text = styled.div`
  h1,
  p,
  h4 {
    padding-left: 8.5rem;
    position: relative;
    z-index: 2;
  }

  h1 {
    width: 46.8rem;
    height: 9.7rem;
    padding-top: 5.9rem;
  }

  span {
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    width: 44rem;
    padding-top: 8.1rem;
  }

  h4 {
    font-size: 1.5rem;
    padding-top: 2.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary_light};
  }
`;

export const Button = styled.div`
  margin-top: 3.125rem;
  margin-left: 8.5rem;
  position: relative;
  z-index: 2;
`;
