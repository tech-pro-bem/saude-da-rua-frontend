import styled from 'styled-components';

export const Container = styled.div`
  .carousel {
    overflow: hidden;
  }

  .inner {
    white-space: nowrap;
    transition: transform 0.3s;
  }

  .carousel-item {
    display: inline-flex;
    height: 300px;
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.dark};
  }

  .indicators {
    display: flex;
    justify-content: center;
  }

  .indicators > button {
    margin: 5px;
  }

  .indicators > button.active {
    background: ${(props) => props.theme.colors.dark};
  }
`;
