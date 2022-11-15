import styled from 'styled-components';

export const Container = styled.section`
  max-width: 571px;
  margin: 0 auto;
  margin-bottom: 2.5rem;

  & > p {
    padding-right: 0.75rem;
    margin-bottom: 1.5rem;
  }

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

export const InputsBox = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-bottom: 1.5rem;

    label {
      color: ${(props) => props.theme.colors.primary_light};
    }

    input {
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      margin: 0;
      font: inherit;
      color: ${(props) => props.theme.colors.primary_light};
      width: 1.25rem;
      height: 1.25rem;
      border: 1px solid ${(props) => props.theme.colors.primary_light};
      border-radius: 4px;
      transform: translateY(-0.075em);

      display: grid;
      place-content: center;

      &::before {
        content: '';
        width: 0.65rem;
        height: 0.65rem;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1rem 1rem gray;
        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      }

      &:checked::before {
        transform: scale(1);
      }
    }
  }
`;
