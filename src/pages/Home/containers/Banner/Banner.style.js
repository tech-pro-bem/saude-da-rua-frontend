import styled from 'styled-components';
import { banner } from '@assets';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 624px;
  margin: 0 auto 116px auto;
  background: url(${banner}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 94px 136px;

  @media screen and (min-width: 960px) {
    margin: 93px auto 64px auto;
  }

  @media screen and (max-width: 768px) {
    height: 396px;
    margin: 0 auto 64px auto;
    padding: 0px 0px 0px 0px;
    align-items: flex-end;
    background-position: 60%;
  }

  div {
    width: 545px;
    @media screen and (max-width: 768px) {
      margin: 62px 16px 0px 16px;
      width: 100%;
    }

    h1 {
      margin-bottom: 40px;
      em {
        font-style: normal;
        color: ${(props) => props.theme.colors.primary};
      }
      @media screen and (max-width: 768px) {
        margin-bottom: 24px;
        font-size: 32px;
      }
    }
    p {
      margin-bottom: 40px;

      @media screen and (max-width: 768px) {
        margin-bottom: 40px;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        font-feature-settings: 'pnum' on, 'onum' on;
      }
    }
    h4 {
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      color: ${(props) => props.theme.colors.primary_light};
      margin-bottom: 47px;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
`;
