import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;

  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
  }
  > :nth-child(1) {
    margin-right: 25px;
    width: 50%;
  }
`;
export const List = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Option = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.colors.primary_light};
  margin-bottom: 24px;

  > :nth-child(1) {
    margin-right: 25px;
  }

  img {
    margin-top: 5px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const WhatMedicinesCanYouDonateImageContainer = styled.div`
  width: 500px;
  margin: 0 auto;

  @media (max-width: 960px) {
    display: none;
  }
`;
export const WhatMedicinesCanYouDonate = styled.div`
  max-width: 1167px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;

  margin-top: 5rem;
  margin-bottom: 5rem;

  p {
    margin-top: 1rem;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    margin-top: 64px;
    margin-bottom: 64px;
  }
`;
