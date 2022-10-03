import styled from 'styled-components';
import banner from '@assets/volunter4.png';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-top: 93px;
  height: 339px;
  background: url(${banner}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  padding-left: 134px;

  @media screen and (max-width: 873px) {
    margin-top: 0px;
    padding-left: 16px;
    align-items: flex-end;
    background-position: 80%;
  }

  div {
    @media screen and (max-width: 873px) {
      margin: 62px 16px 0px 16px;
      width: 100%;
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
