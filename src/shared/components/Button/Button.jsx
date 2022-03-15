import React from 'react';
import { Container } from './Button.style.js';

export const Button = ({ text, clickFn }) => (
  <Container onClick={clickFn}>{text}</Container>
);
