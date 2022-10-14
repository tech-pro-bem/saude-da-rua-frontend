import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 5rem;

  & > h3 {
    margin-bottom: 4rem;
    text-align: center;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.primary_light};
  }
`;

export const GridContent = styled.div`
  max-width: 948px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 5rem;
  row-gap: 1.5rem;

  & > div {
    h4 {
      font-size: 1.375rem;
      font-weight: 500;
      line-height: 2;
      color: ${(props) => props.theme.colors.light};
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;
