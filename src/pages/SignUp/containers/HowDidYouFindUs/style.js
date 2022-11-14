import styled from 'styled-components';
import caretDown from '../../../../assets/svg/caret_down.svg';

export const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 571px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 1rem;
  }

  select {
    width: 100%;
    height: 48px;
    border-radius: 5px;
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.primary_light};
    outline: none;
    padding: 12px 24px;
    color: ${(props) => props.theme.colors.primary_light};
    font-size: 1rem;

    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(${caretDown});
    background-repeat: no-repeat;
    background-position-x: calc(100% - 20px);
    background-position-y: 18px;
  }
`;
