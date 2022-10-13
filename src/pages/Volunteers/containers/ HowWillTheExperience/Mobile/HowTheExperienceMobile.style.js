import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 22px;
  }
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 26px;
  color: ${(props) => props.theme.colors.primary_light};
  margin: 28px 0px 24px 0px;
`;

export const Paragraph = styled.p`
  margin: 15px 0 22px 0;
`;
