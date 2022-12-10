import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const Container = styled.section`
  margin-bottom: 2.5rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 2.8rem;
  }
`;

export const Step = styled.div`
  margin: 0 auto;
  margin-bottom: 1.5rem;
  position: relative;
  max-width: 571px;

  @media screen and (min-width: 768px) {
    margin-top: 1.5rem;
  }

  & > span {
    color: ${(props) => props.theme.colors.border_input};
    font-size: 1.125rem;
    line-height: 1.6875rem;
    margin-bottom: 0.5rem;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  & > h2 {
    font-size: 1.375rem;
    line-height: 2.0625rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: transparent;
      width: 1.25rem;
      height: 1.25rem;

      svg {
        color: ${(props) => props.theme.colors.primary_light};
      }
    }

    @media screen and (min-width: 768px) {
      text-align: center;
      justify-content: center;
      gap: 1rem;
    }
  }
`;

export const FormStyle = styled.div`
  max-width: 571px;
  margin: 0 auto;
`;

export const BoxInput = styled.div`
  margin-bottom: 1.5rem;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 1.52rem;
    min-width: 270px;
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

export const Tooltip = styled.div`
  background: ${(props) => props.theme.colors.primary_light};
  border-radius: 0.25rem;
  padding: 1rem;
  position: absolute;
  right: 0;
  left: 0;
  top: 60px;
  z-index: 1;

  p {
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: ${(props) => props.theme.colors.tooltip_title};
  }

  & > p:first-of-type {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;

export const DisclosureStyle = styled.div`
  width: 100%;
  background: #212933;
  border-radius: 5px;
  min-height: 3rem;
  padding: 12px 24px;
  margin: 0 auto;
  margin-bottom: 23px;
  max-width: 571px;

  & > button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    color: ${(props) => props.theme.colors.primary_light};
    font-weight: 400;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }

  .disclosure-content {
    padding: 24px 0;
    color: ${(props) => props.theme.colors.primary_light};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;

    & > :nth-child(2),
    & > :nth-child(4) {
      text-align: end;
    }

    @media screen and (min-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .disclosure-buttons-actions {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    button {
      cursor: pointer;
      background: transparent;
      color: ${(props) => props.theme.colors.primary_light};
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  }
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
