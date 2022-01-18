import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 280px;
  height: 57px;
  left: 560px;
  top: 2100px;

  color: #0095f6;
  font-family: Verdana, Poppins, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 9px;

  border: 2px solid #0095f6;
  box-sizing: border-box;
  border-radius: 40px;
  background-color: black;

  cursor: pointer;
  pointer-events: auto;

  transition: all 0.3s;

  &:hover,
  &:focus {
    color: #0095f6;
  }
  &:active {
    color: white;
    background-color: #0095f6;
  }
`;
