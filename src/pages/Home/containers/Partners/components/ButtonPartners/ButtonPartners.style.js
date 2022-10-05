import styled from 'styled-components';

export const Container = styled.button`
  padding: 0.5rem 1rem;
  width: 327px;
  height: 59px;
  margin-top: 30px;

  font-size: 1.12rem;
  font-weight: 600;

  color: ${(props) => props.theme.colors.primary};

  background-color: transparent;
  border: 2px solid;
  border-radius: 40px;

  transition: 0.2s all;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary_light};
    border-color: ${(props) => props.theme.colors.primary};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    border: 0;
    max-width: 345px;
  }
`;
