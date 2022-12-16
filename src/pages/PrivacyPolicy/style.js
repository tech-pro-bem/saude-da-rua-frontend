import { Structure } from '@components';
import styled from 'styled-components';

export const Container = styled(Structure)`
  padding: 46.57px 16px 40px 16px;

  @media (min-width: 768px) {
    padding-top: 173px;
  }

  h1,
  h2,
  h3,
  p,
  ul,
  ol {
    color: #fbfbfb;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
      font-weight: 700;
      font-size: 52px;
      line-height: 78px;
      text-align: center;
      margin-bottom: 24px;
    }
  }

  h2,
  h3 {
    font-size: 22px;
    line-height: 33px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 24px;
  }

  ul,
  ol {
    font-size: 18px;
    list-style-position: inside;
  }

  ul {
    margin-bottom: 24px;
  }

  ol {
    list-style: none;

    li {
      margin-bottom: 24px;

      &:last-of-type {
        margin-bottom: 0;
        padding-bottom: 24px;
      }
    }
  }

  a {
    color: ${(props) => props.theme.colors.light};
    font-weight: 500;
    cursor: pointer;

    &:hover {
      font-weight: 600;
    }
  }
`;

export const SummaryContent = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
  }
`;

export const Content = styled.div`
  display: grid;

  grid-template-columns: repeat(1, 2fr);
  @media (min-width: 768px) {
    grid-template-rows: repeat(1, 1fr);
    columns: 2;
    column-gap: 2rem;
  }

  @media (min-width: 1024px) {
    column-fill: 2;
  }
  section {
    padding-top: 90px;
  }

  strong {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #fbfbfb;
  }
`;
