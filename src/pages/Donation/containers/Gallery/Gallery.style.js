import styled from 'styled-components';
import { OutlinedImage } from '@components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 16px;
  align-items: center;
  justify-items: center;
`;

export const PostionedOutlinedImage = styled(OutlinedImage)`
  grid-row: ${({ gridRow = 'auto' }) => gridRow};
  grid-column: ${({ gridColumn = 'auto' }) => gridColumn};
  align-self: ${({ align = 'auto' }) => align};
  justify-self: ${({ justify = 'auto' }) => justify};
`;
