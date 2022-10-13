import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  padding-top: 90px;
  margin-left: 70px;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Heading = styled.h3`
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => props.theme.colors.primary_light};
  margin: 28px 0px 24px 0px;
`;

export const Paragraph = styled.p`
  margin: 15px 0 22px 0;
`;
