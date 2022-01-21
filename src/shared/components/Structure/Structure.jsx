import React from 'react';
import styled from 'styled-components';

const Structure = styled.div`
  width: 1140px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 769px) {
    padding-left: 95px;
  }

  @media (min-width: 1185px) {
    padding-left: 80px;
  }
`;

export default Structure;
