import styled from 'styled-components';

export const ContainerStyle = styled.div`
  color: white;

  ul {
    display: grid;
    gap: 0.6rem;

    li {
      display: inline-block;

      gap: 0.3rem;
      font-weight: 400;
      font-size: 1.375rem;

      &::before {
        content: '';
        width: 0.3rem;
        height: 0.31rem;
        background: whitesmoke;
        display: inline-block;
        margin-right: 0.4rem;
        margin-bottom: 0.2rem;

        border-radius: 50%;
      }

      @media (max-width: 40rem) {
        font-size: 1rem;
        &::before {
        }
      }
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    h2 {
      color: ${(props) => props.theme.colors.primary_light};
      padding: 5px;
      margin-top: 10px;
      font-size: 40px;
      margin-bottom: 62px;
    }
  }

  #content {
    text-align: justify;
    color: ${(props) => props.theme.colors.primary_light};
  }

  @media (max-width: 40rem) {
    p,
    ul,
    li {
      font-size: 1rem;
    }
  }
`;
