import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 2.5rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 2.8rem;
  }
`;

export const Step = styled.div`
  margin-bottom: 1.25rem;

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

    @media screen and (min-width: 768px) {
      text-align: center;
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
    font-size: 18px;
  }
`;
