import styled from 'styled-components';
import { OutlinedImage } from '@components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 16px;
  align-items: center;
  justify-items: center;

  @media (max-width: 640px) {
    margin: 2rem auto;
    padding: 0;
    grid-template-columns: 1fr;
    grid-template-rows: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PostionedOutlinedImage = styled(OutlinedImage)`
  grid-row: ${({ gridRow = 'auto' }) => gridRow};
  grid-column: ${({ gridColumn = 'auto' }) => gridColumn};
  align-self: ${({ align = 'auto' }) => align};
  justify-self: ${({ justify = 'auto' }) => justify};
`;
