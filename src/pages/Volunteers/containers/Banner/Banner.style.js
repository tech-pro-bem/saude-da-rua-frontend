import banner from '@assets/volunter4.png';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 93px auto 64px auto;
  height: 339px;
  background: url(${banner}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;

  @media screen and (max-width: 873px) {
    margin-top: 0px;
    margin-bottom: 62px;
    padding-left: 0px;
    width: 100%;
    align-items: flex-end;
    background-position: 80%;
  }

  div {
    margin: 0 auto;
    max-width: 1167px;
    width: 100%;

    @media (max-width: 1200px) {
      padding: 0 25px;
    }

    @media (max-width: 500px) {
      padding: 0 10px;
    }

    h1 {
      margin-bottom: 40px;
      em {
        font-style: normal;
        color: ${(props) => props.theme.colors.primary};
      }
      @media screen and (max-width: 873px) {
        margin-bottom: 22px;
        font-size: 32px;
      }
      @media screen and (max-width: 321px) {
        font-size: 25px;
      }
    }
    p {
      margin-bottom: 40px;
      max-width: 587px;
      @media screen and (max-width: 873px) {
        margin-bottom: 38px;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        font-feature-settings: 'pnum' on, 'onum' on;
      }
      @media screen and (max-width: 321px) {
        font-size: 16px;
      }
    }
  }
`;
