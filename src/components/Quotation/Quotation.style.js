import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: ${({ margin }) => margin || 'initial'};
  width: ${({ width }) => width || 'fit-content'};
  max-width: ${({ maxWidth }) => maxWidth || 'initial'};
  color: #e9e9e9;

  p.Quote {
    position: relative;
    padding: 0 1rem;
    text-align: initial;
    ::before,
    ::after {
      position: absolute;
      font-family: Georgia, serif;
      font-size: 60px;
      color: ${({ theme }) => theme.colors.primary_light};
    }

    ::before {
      content: '\\201C';
      top: -2rem;
      left: -8px;
    }

    ::after {
      content: '\\201C';
      transform: rotate(180deg);
      bottom: -2rem;
      right: 0;
    }
  }

  h3.Author {
    padding: 0 1rem;
    margin-top: 1rem;
    font-size: 0.99rem;
  }

  @media (min-width: 640px) {
    padding: 8px 72px 8px 32px;
    p.Quote {
      text-align: center;
      font-size: 1.75rem;
      ::before,
      ::after {
        display: none;
      }
    }

    h3.Author {
      text-align: right;
      margin-top: 32px;
      font-size: 20px;
      font-style: italic;
    }
    ::before,
    ::after {
      position: absolute;
      font-family: Georgia, serif;
      font-size: 60px;
      color: ${({ theme }) => theme.colors.primary_light};
    }
    ::before {
      content: '\\201C';
      top: -2rem;
      left: -8px;
    }
    ::after {
      content: '\\201C';
      transform: rotate(180deg);
      bottom: -1rem;
      right: 0;
    }
  }
`;
