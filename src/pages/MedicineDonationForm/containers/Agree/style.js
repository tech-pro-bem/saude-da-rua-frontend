import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 571px;
  margin: 0 auto;
  margin-bottom: 2.5rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 37px;
  }
`;

export const Check = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.3rem;

  label {
    color: ${(props) => props.theme.colors.primary_light};
    flex: 1;

    a {
      color: ${(props) => props.theme.colors.light};
      font-weight: 500;

      &:hover {
        font-weight: 600;
      }
    }
  }

  input {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    margin: 0;
    margin-top: 5px;
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
`;
