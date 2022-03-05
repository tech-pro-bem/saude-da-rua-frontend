import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 420px;
`;

export const PostionedOutlinedImage = styled.img`
  position: absolute;
  transform: ${({ transform = 'none' }) => transform};
  left: ${({ left = 'auto' }) => left};
  right: ${({ right = 'auto' }) => right};
  top: ${({ top = 'auto' }) => top};
  bottom: ${({ bottom = 'auto' }) => bottom};
`;
