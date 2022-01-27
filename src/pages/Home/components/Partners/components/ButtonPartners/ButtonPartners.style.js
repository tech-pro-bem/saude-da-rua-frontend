import styled from 'styled-components';
///** TODO:
// - utilizar variaveis de cor do theme ok
// - utilizar a variavel de fonte que vem do theme ok

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin-left: -160px;
  margin-top: -10px;

  width: 280px;
  height: 57px;

  color: ${(props) => props.theme.colors.primary};
  flex: none;
  order: 0;
  flex-grow: 0;

  border: 2px solid ${(props) => props.theme.colors.primary};
  box-sizing: border-box;
  border-radius: 40px;
  background-color: ${(props) => props.theme.colors.blackUI};

  cursor: pointer;
  pointer-events: auto;

  transition: all 0.3s;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
  }
  &:active {
    color: ${(props) => props.theme.colors.primary_light};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
