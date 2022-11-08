import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 2.5rem;
`;

export const Step = styled.div`
  margin-bottom: 1.25rem;

  & > span {
    color: ${(props) => props.theme.colors.border_input};
    font-size: 1.125rem;
    line-height: 1.6875rem;
    margin-bottom: 0.5rem;
  }

  & > h2 {
    font-size: 1.375rem;
    line-height: 2.0625rem;
  }
`;

export const BoxInput = styled.div`
  margin-bottom: 1.5rem;
  position: relative;

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

export const Tooltip = styled.div`
  background: ${(props) => props.theme.colors.primary_light};
  border-radius: 0.25rem;
  padding: 1rem;
  position: absolute;
  right: 0;
  left: 0;
  top: 28px;

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
