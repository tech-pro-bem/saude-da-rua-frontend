import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const InputTextStyle = styled(InputMask)`
  display: flex;
  align-items: flex-start;
  padding: 0.75rem 1.5rem;
  outline: none;

  width: 100%;
  height: 3rem;

  border: 1px solid ${(props) => props.theme.colors.primary_light};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.primary_light};
  background-color: transparent;

  ::placeholder {
    color: ${(props) => props.theme.colors.primary_light};
    font-size: 18px;
  }
`;
