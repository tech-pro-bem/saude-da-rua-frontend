import styled from 'styled-components';
import { banner } from '../../../../../src/assets/index';

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
  div {
    width: 545px;
    h1 {
      margin-bottom: 40px;
      em {
        font-style: normal;
        color: ${(props) => props.theme.colors.primary};
      }
    }
    p {
      margin-bottom: 40px;
    }
    h4 {
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      color: ${(props) => props.theme.colors.primary_light};
      margin-bottom: 47px;
    }
  }
`;
