import styled from 'styled-components';

export const Message = styled.span`
  color: ${(props) => props.theme.colors.error};
  font-size: 0.75rem;
  line-height: 1.3125rem;
  margin-top: 0.5rem;
`;
