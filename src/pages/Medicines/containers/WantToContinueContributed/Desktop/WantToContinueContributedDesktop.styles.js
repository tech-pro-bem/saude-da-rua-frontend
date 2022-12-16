import styled from 'styled-components';
import LinkButton from '../../../../../components/LinkButton/LinkButton';

export const Container = styled.div`
  display: flex;
  gap: 28px;
  padding: 44px 8px;

  @media (max-width: 995px) {
    padding: 0px 4px;
    padding-bottom: 60px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 10px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const Paragraph = styled.p`
  margin-bottom: 40px;
  font-size: 22px;
`;

export const Button = styled(LinkButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 328px;

  @media (max-width: 1035px) {
    font-size: 14px;
    padding: 14px 8px;
  }
`;

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
