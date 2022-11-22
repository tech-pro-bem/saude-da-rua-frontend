import styled from 'styled-components';
import LinkButton from '../../../../../components/LinkButton/LinkButton';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  padding-bottom: 60px;

  @media (max-width: 405px) {
    padding: 0px 4px;
    padding-bottom: 60px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const Paragraph = styled.p`
  margin-bottom: 40px;
`;

export const Button = styled(LinkButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 405px) {
    font-size: 14px;
    padding: 14px 8px;
  }
`;
