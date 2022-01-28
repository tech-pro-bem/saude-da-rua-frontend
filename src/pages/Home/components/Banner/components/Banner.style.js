import styled from 'styled-components';
import img from '../../../../../assets/voluntary.png';

export const BannerContainer = styled.div`
  background-image: url(${img});
  background-size: 100% 100%;
  height: 39rem;
  width: 120vw;
`;

export const Text = styled.h1`
  h1,
  p,
  h4 {
    padding-left: 8.5rem;
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
  }
`;

export const Button = styled.div`
  margin-top: 3.125rem;
  margin-left: 8.5rem;
`;
