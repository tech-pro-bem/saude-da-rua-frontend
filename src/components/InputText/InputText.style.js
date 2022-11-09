import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const InputTextStyle = styled(InputMask)`
  display: flex;
  align-items: flex-start;
  padding: 12px 24px;

  width: 270px;
  height: 45px;

  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border_input};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary_light};
  background-color: transparent;

  ::placeholder {
    color: ${(props) => props.theme.colors.primary_light};
    font-size: 18px;
  }

  @media screen and (max-width: 520px) {
    border: 1px solid ${(props) => props.theme.colors.primary_light};
    width: 100%;
    height: 48px;
    outline: none;
  }
`;
