import styled from 'styled-components';

export const CheckboxStyle = styled.input`
  display: flex;
  align-items: flex-start;
  padding: 12px 24px;

  width: 20px;
  height: 20px;

  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border_input};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.primary_light};
  background-color: transparent;

  ::placeholder {
    color: ${(props) => props.theme.colors.primary_light};
    font-size: 18px;
  }
`;
