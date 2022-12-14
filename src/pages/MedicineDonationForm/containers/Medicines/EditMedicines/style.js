import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const DisclosureEditStyle = styled.div`
  width: 100%;
  max-width: 585px;
  background: #212933;
  border-radius: 5px;
  min-height: 3rem;
  padding: 12px 0.8rem;
  margin: 0 auto;
  margin-bottom: 40px;

  & > button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    color: ${(props) => props.theme.colors.primary_light};
    font-weight: 400;
    padding: 0 18.2px;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }

  & > div {
    padding: 24px 0 0;
    color: ${(props) => props.theme.colors.primary_light};

    & > button {
      cursor: pointer;
      background: transparent;
      color: ${(props) => props.theme.colors.primary_light};
      margin-top: 20px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.colors.primary_light};

  & > button {
    cursor: pointer;
    background: transparent;
    color: ${(props) => props.theme.colors.primary_light};
    width: 50%;
    font-weight: 400;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;

export const FormStyle = styled.div`
  max-width: 571px;
  margin: 0 auto;
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const BoxInput = styled.div`
  margin-bottom: 1.5rem;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 1.52rem;
    min-width: 267px;
  }

  & > label {
    color: ${(props) => props.theme.colors.primary_light};
    line-height: 1.3125rem;
    margin-bottom: 1.25rem;
    display: flex;
    justify-content: space-between;

    button {
      background: transparent;
      width: 1.25rem;
      height: 1.25rem;

      svg {
        color: ${(props) => props.theme.colors.primary_light};
      }
    }
  }
`;

export const Input = styled.input`
  display: flex;
  align-items: flex-start;
  padding: 0.75rem 1.5rem;
  outline: none;

  width: 100%;
  height: 3rem;

  border: 1px solid
    ${(props) =>
      props.iserror === 'erro'
        ? props.theme.colors.error
        : props.theme.colors.primary_light};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.primary_light};
  background-color: transparent;

  ::placeholder {
    color: ${(props) => props.theme.colors.primary_light};
    font-size: 1rem;
  }
`;

export const DatePickerStyle = styled(DatePicker)`
  display: flex;
  align-items: flex-start;
  padding: 0.75rem 1.5rem;
  outline: none;

  width: 100%;
  height: 3rem;

  border: 1px solid
    ${(props) =>
      props.iserror === 'erro'
        ? props.theme.colors.error
        : props.theme.colors.primary_light};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.primary_light};
  background-color: transparent;

  ::placeholder {
    color: ${(props) => props.theme.colors.primary_light};
    font-size: 1rem;
  }
`;

export const DatePickerHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.7rem;

  & > button {
    background: ${(props) => props.theme.colors.primary_light};
    border-radius: 3px;
    border: 1px solid gray;
    padding: 0 0.4rem;
  }
`;
