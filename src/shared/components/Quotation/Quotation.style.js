import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 8px 72px 8px 32px;
  margin: ${({ margin }) => margin || 'initial'};
  width: ${({ width }) => width || 'fit-content'};
  max-width: ${({ maxWidth }) => maxWidth || 'initial'};

  ::before,
  ::after {
    position: absolute;
    font-family: Georgia, serif;
    font-size: 60px;
    color: ${({ theme }) => theme.colors.primary_light};
  }

  ::before {
    content: '\\201C';
    top: -8px;
    left: -16px;
  }

  ::after {
    content: '\\201C';
    transform: rotate(180deg);
    bottom: -8px;
    right: -16px;
  }
`;

export const Author = styled.p`
  text-align: right;
  margin-top: 32px;
`;
